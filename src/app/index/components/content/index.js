import styles from "./index.scss?p6";
import React, { Component } from 'react';
import Head from '../head';
import Select from '../select';
import List from '../list';

export default class Content extends Component {

    render() {

      // let {} = this.props;

      return (
          <div className={styles.content}>
            <Head />
            <Select />
            <List />
          </div>
      );
    }
}
