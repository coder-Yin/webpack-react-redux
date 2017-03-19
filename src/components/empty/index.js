import React, { Component } from 'react';
import styles from "./index.scss?p6";
export default class Empty extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      let {cutHeight} = this.props;
      cutHeight = cutHeight ? cutHeight : 0;
      this.refs.emptyWrap.style.height = window.innerHeight - cutHeight;
    }

    render() {

        return (
          <div className={styles.wrap} ref="emptyWrap">
            <div className={styles.content}>
              <div className={styles.text}>
                抱歉，内容为空~
              </div>
            </div>
          </div>
        );
    }
}
