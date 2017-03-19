import React, { Component } from 'react';
import styles from "./index.scss?p6";
export default class FeedBack extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {type} = this.props;

        return (
            <a href="#" className={styles.icon}></a>
        );
    }
}
