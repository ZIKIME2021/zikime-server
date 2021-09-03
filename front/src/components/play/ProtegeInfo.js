import React, { Component} from 'react';
import palette from '../../lib/styles/palette';
import Button from '../../common/Button';
import Player from './Player';

class ProgeteInfo extends Component {
    
    constructor(props){
        super(props);
        this.func1 = this.func1.bind(this);
        this.func2 = this.func2.bind(this);
    }
    state = {
        isShowing: false,
    }
    
    handleShowing = (answer) => {

        if(answer){
            this.setState({isShowing:true});
        }else
        {
            this.setState({isShowing:false});
        }
    };
    

    func1() {
        console.log("Test");
        // 서버 영상 요청
        // 서버 응답 받아오기
        // 응답에 따른 처리
        // 동의할 경우, 새 윈도우에 영상 출력
        // 거절할 경우, 취소했다는 메세지 출력
        const answer = window.confirm("영상 요청 중입니다.");
        if(answer)
        {
            console.log("Streaming Start");
            this.handleShowing(answer);

        }
        else
        {
            console.log("Nothing");
            this.handleShowing(answer);

        }

    }
    func2() {
        console.log("Test");
        // 서버 위치 요청
        // 서버 응답 받아오기
        // 응답에 따른 처리
        // 동의할 경우, 위치 출력
        // 거절할 경우, 취소했다는 메세지 출력
        const answer = window.confirm("위치를 받아오는 중입니다.");
        if(answer)
        {
            console.log("google map api Start");

        }
        else
        {
            console.log("Nothing");
        }

    }
    
    render() {

        const { name, phone } = this.props.info;
        const {isShowing} = this.state;

        const divStyle = {
            align: 'center',
            margin: '0 auto',
            textAlign: 'center',
            border: `1px solid ${palette.blue[0]}`,
        };
        const contentStyle = {
            display: 'inline-block',
            padding: '10px',
        }
        
        return (
                <div style={divStyle}>
                    <h5 style={contentStyle}>이름: {name}</h5>
                    <h5 style={contentStyle}>전화번호: {phone}</h5>
                    <Button style={{display:'inline-block', padding:'5px', margin:'2px'}} onClick={this.func2}>위치 보기</Button>
                    <Button style={{display:'inline-block', padding:'5px', margin:'2px'}} onClick={this.func1}>영상 요청 </Button>
                    {isShowing && <Player/>}
                </div>
                
        );
    }
}

export default ProgeteInfo;