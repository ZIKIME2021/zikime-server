import React, { Component } from 'react';
import styled from 'styled-components';
import ProtegeInfoList from '../components/play/ProtegeInfoList';

const WatchWrapper = styled.div`

`;

class WatchPage extends Component {

    id = 2;
    state = {
        protege : [
            {
                id : 0,
                name: '홍길동',
                phone: '010 - 1234- 5678',
            },
            {
                id : 1,
                name: '박서준',
                phone: '010 - 4321- 8765',
            },
        ]
    }

    render() {
        const divStyle = {
            display: 'block',
            margin: '0 auto',
            align: 'center',
            width: '30vw',
        }

        return (
            <WatchWrapper style={divStyle}>
                <div style={{margin:'2px 2px'}}>등록된 피보호자</div>
                <ProtegeInfoList 
                    data={this.state.protege}/>
            </WatchWrapper>
        );
    }
}

export default WatchPage;