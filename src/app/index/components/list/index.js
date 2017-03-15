import styles from "./index.scss?p6";
import React, { Component } from 'react';

export default class List extends Component {

    render() {

      // let {} = this.props;

      return (
          <div className={styles.content}>
            <ul>
              <li className={styles.li}>
                <div className={styles.top}>
                  <div className={styles.title}>找XX公司CEO联系方式</div>
                  <div className={styles.subTitle}>报酬100元</div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.left}></div>
                  <div className={styles.right}>
                    <div className={styles.right}>
                      <span className={styles.stress}>李白丨</span>唐诗创始人
                    </div>
                    <div className={styles.mt}>上海·浦东</div>
                  </div>
                </div>
              </li>

              <li className={styles.li}>
                <div className={styles.top}>
                  <div className={styles.title}>找XX公司CEO联系方式</div>
                  <div className={styles.subTitle}>报酬100元</div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.left}></div>
                  <div className={styles.right}>
                    <div className={styles.right}>
                      <span className={styles.stress}>李白丨</span>唐诗创始人
                    </div>
                    <div className={styles.mt}>上海·浦东</div>
                  </div>
                </div>
              </li>

              <li className={styles.li}>
                <div className={styles.top}>
                  <div className={styles.title}>找XX公司CEO联系方式</div>
                  <div className={styles.subTitle}>报酬100元</div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.left}></div>
                  <div className={styles.right}>
                    <div className={styles.right}>
                      <span className={styles.stress}>李白丨</span>唐诗创始人
                    </div>
                    <div className={styles.mt}>上海·浦东</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      );
    }
}
