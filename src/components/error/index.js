import React, { Component } from 'react';
import styles from "./index.scss?p6";
export default class Error extends Component {

    constructor(props) {
        super(props);
    }

    onReload() {
      let {fnReload} = this.props;
      fnReload();
    }

    componentDidMount() {
      let {cutHeight} = this.props;
      cutHeight = cutHeight ? cutHeight : 0;
      this.refs.errorWrap.style.height = window.innerHeight - cutHeight;
    }

    render() {

        return (
          <div className={styles.wrap} ref="errorWrap">
            <div className={styles.content}>
              <span className={styles.icon}></span>
              <div className={styles.mt}>
                <a href="javascript:void(0);" className={styles.text} onClick={this.onReload.bind(this)}>抱歉，发生了错误~~点击刷新</a>
              </div>
            </div>
          </div>
        );
    }
}
