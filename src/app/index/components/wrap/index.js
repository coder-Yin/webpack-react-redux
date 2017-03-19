import styles from "./index.scss?p6";
import React, { Component } from 'react';
import Content from '../content';
import Error from 'error';
import BottomOps from 'bottom-ops';
import FeedBack from 'feedback';

export default class Wrap extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let { param_content, param_error, isLoading, isError } = this.props;

        return (
            <div className={styles.root}>
            {
                isLoading ? <div></div> :
                <div>
                {
                  isError && <Error {...param_error}/>

                }
                {
                  !isError &&
                    <div className={styles.container}>
                      <Content {...param_content} />
                      <BottomOps type={1} />
                      <FeedBack />
                    </div>
                }
                </div>
            }
            </div>
        );
    }
}
