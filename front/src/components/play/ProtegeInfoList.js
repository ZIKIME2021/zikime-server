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
        const {data} = this.props;
        const list = data.map(
           info => (
               <ProgeteInfo
                    info = {info}
                />
           )
       );
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