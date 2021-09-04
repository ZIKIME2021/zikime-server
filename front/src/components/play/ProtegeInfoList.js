import React, { Component, Fragment } from 'react';
import ProgeteInfo from './ProtegeInfo';
class ProtegeInfoList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const style = { 
            display: 'block',
            padding: '1px',
            margin: '2px auto',
            align: 'center',
            width: '30vw',
        }
        let list = [];
        let {data} = this.props;
        for(let i = 0; i < data.length; i++) {
            list.push(<div key = {data[i].id}><ProgeteInfo info={data[i]}/></div>);
        }
       
        return (
            <Fragment>
            <div style={style}>
                {list}
            </div>
            </Fragment>
        );
    }
}

export default ProtegeInfoList;