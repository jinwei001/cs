import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

class My extends Component {
    state={ clientHeight: document.documentElement.clientHeight || document.body.clientHeight}
    render() {
        return (
            <div>
                inn
            </div>
        )
    }
}
export default My;