import React, { Component } from 'react';
import styles from "./index.scss?p6";
export default class Head extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    shouldComponentUpdate() {
      return false;
    }

    render() {

        return (
            <div className={styles.root}>
             <img src={require('./images/banner.png')} className={styles.img} />
            </div>
        );
    }
}
