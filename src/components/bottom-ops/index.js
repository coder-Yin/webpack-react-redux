import React, { Component } from 'react';
import styles from "./index.scss?p6";
export default class BottomOps extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        let {type} = this.props;

        return (
            <div className={`${styles.wrap} clearfix`}>
              <a href="#" className={styles.a}>
                <div className={styles.content}>
                  <span className={`${styles.icon} ${type == 1 ? styles.icon1 : styles.icon1_gray}`}></span>
                  <div className={type == 1 ? styles.textActive : styles.text}>勾搭</div>
                </div>
              </a>
              <a href="#" className={styles.a}>
                <div className={styles.content}>
                  <span className={`${styles.icon} ${type == 2 ? styles.icon1 : styles.icon2_gray}`}></span>
                  <div className={type == 2 ? styles.textActive : styles.text}>我的</div>
                </div>
              </a>
            </div>
        );
    }
}
