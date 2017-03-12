import styles from "./index.scss?p6";
import React, { Component } from 'react';

export default class StudyAdvice extends Component {

    onReload() {
      let {reload} = this.props;
      reload();
    }

    onBtnBack() {
      let {fnBtnBack} = this.props;
      fnBtnBack();
    }

    render() {
        return (
            <div className={styles.error}>
              <div className={styles.top}>
                <div className={styles.topPadding}></div>
                <div className={styles.topMain}>
                  <a href="javascript:void(0);" className="hui-icon hui-icon-carat-l" onClick={this.onBtnBack.bind(this)}></a>
                </div>
              </div>
              <div className={styles.middle}>
                <span className={styles.img}></span>
                <div className={styles.center}>
                  <a href="javascript:void(0);" className={styles.text} onClick={this.onReload.bind(this)}>加载失败，点击重新加载</a>
                </div>
              </div>
            </div>
        );
    }
}
