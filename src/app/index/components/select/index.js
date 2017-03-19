import React, { Component } from 'react';
import styles from "./index.scss?p6";
export default class Select extends Component {

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
            <div className={`${styles.wrap} clearfix`}>
              <a href="#" className={styles.a}>
                <div>
                  <span className={`${styles.icon} ${styles.icon1}`}></span>
                  <p className={styles.text}>朋友圈推广</p>
                </div>
              </a>
              <a href="#" className={styles.a}>
                <div>
                  <span className={`${styles.icon} ${styles.icon2}`}></span>
                  <p className={styles.text}>内推</p>
                </div>
              </a>
              <a href="#" className={styles.a}>
                <div>
                  <span className={`${styles.icon} ${styles.icon3}`}></span>
                  <p className={styles.text}>商务合作</p>
                </div>
              </a>
              <a href="#" className={styles.a}>
                <div>
                  <span className={`${styles.icon} ${styles.icon4}`}></span>
                  <p className={styles.text}>其他</p>
                </div>
              </a>
            </div>
        );
    }
}
