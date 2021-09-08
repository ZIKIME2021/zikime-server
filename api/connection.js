const {OrderedMap} = require('immutable');
const {ObjectId} = require('mongodb');


class Connection{
    constructor(app) {
        this.app = app;
        this.clients = new OrderedMap();
        this.socketServerConnect();
    }
    getClients(){
        return this.clients;
    }
    addClient(id, client){
        this.clients = this.clients.set(id, client);
    }
    removeClient(id){
        this.clients = this.clients.remove(id);
    }

    socketServerConnect(){
        const app = this.app;
        app.wss.on('connection', (ws, request)=>{

            // 1) 연결 클라이언트 IP 취득
            const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
            console.log(`Raspberry Pi [${ip}]is connected`);

            const clientId = new ObjectId().toString();
            const newClient = {
                _id: clientId,
                ws : ws,
                created: new Date()
            };

            this.addClient(clientId, newClient);

            ws.on('message', (msg) => {

                console.log("Message received from RaspberryPi is", msg);
            });

            ws.on('close', () => {

                console.log(`Raspberry Pi camera with Id ${clientId} is disconnected`);
                this.removeClient(clientId);

            });


            const commandNeedToSendToPi = {action: 'stream', payload: true};
            ws.send(JSON.stringify(commandNeedToSendToPi));


        });


    }
}

exports.connection = Connection;