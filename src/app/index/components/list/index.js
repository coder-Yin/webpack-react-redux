import styles from "./index.scss?p6";
import React, { Component } from 'react';

export default class List extends Component {

    render() {

      let {} = this.props;

      return (
          <div className={styles.content}>
            <div>

              <div className={styles.li_wrap}>
                <span className={styles.icon_tg}></span>
                <div className={styles.li}>
                  <div className={styles.top}>
                    <div className={styles.title}><span className={styles.iconName}></span><span className={styles.lh}>abcdefg需求需求需求</span></div>
                    <div className={styles.subTitle}><span className={styles.iconPrice}></span>报酬100元</div>
                    <div className={`${styles.time} clearfix`}>
                      11:20
                      <div className={styles.fr}>
                        <span className={styles.iconSee}>36</span>
                        <span className={styles.iconCollected}>46</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.bottom} clearfix`}>
                  {
                    1 !== 1 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.qd}`}>抢单</a>
                  }
                  {
                    1 == 2 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.jxz}`}>进行中</a>
                  }
                  {
                    1 == 3 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.ckpj}`}>查看评价</a>
                  }
                  {
                    1 !== 4 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.ywc}`}>已完成</a>
                  }
                  </div>
                </div>
              </div>

              <div className={styles.li_wrap}>
                <span className={styles.icon_qt}></span>
                <div className={styles.li}>
                  <div className={styles.top}>
                    <div className={styles.title}><span className={styles.iconName}></span>abcdefg需求需求需求</div>
                    <div className={styles.subTitle}><span className={styles.iconPrice}></span>报酬100元</div>
                    <div className={`${styles.time} clearfix`}>
                      11:20
                      <div className={styles.fr}>
                        <span className={styles.iconSee}>36</span>
                        <span className={styles.iconCollect}>46</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.bottom} clearfix`}>
                  {
                    1 == 1 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.qd}`}>抢单</a>
                  }
                  {
                    1 == 2 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.jxz}`}>进行中</a>
                  }
                  {
                    1 == 3 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.ckpj}`}>查看评价</a>
                  }
                  {
                    1 == 4 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.ywc}`}>已完成</a>
                  }
                  </div>
                </div>
              </div>

              <div className={styles.li_wrap}>
                <span className={styles.icon_nt}></span>
                <div className={styles.li}>
                  <div className={styles.top}>
                    <div className={styles.title}><span className={styles.iconName}></span>abcdefg需求需求需求</div>
                    <div className={styles.subTitle}><span className={styles.iconPrice}></span>报酬100元</div>
                    <div className={`${styles.time} clearfix`}>
                      11:20
                      <div className={styles.fr}>
                        <span className={styles.iconSee}>36</span>
                        <span className={styles.iconCollected}>46</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.bottom} clearfix`}>
                  {
                    1 !== 1 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.qd}`}>抢单</a>
                  }
                  {
                    1 !== 2 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.jxz}`}>进行中</a>
                  }
                  {
                    1 == 3 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.ckpj}`}>查看评价</a>
                  }
                  {
                    1 == 4 && <a href="javascript:void(0);" className={`${styles.btn} ${styles.ywc}`}>已完成</a>
                  }
                  </div>
                </div>
              </div>

            </div>
          </div>
      );
    }
}
