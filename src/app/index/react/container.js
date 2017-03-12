import mapState from './param';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrap from '../components/wrap';

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Wrap {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return mapState(state);
}

export default connect(mapStateToProps)(Container);
