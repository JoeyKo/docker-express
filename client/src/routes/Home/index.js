import React from 'react';
import TabBar from 'components/TabBar';
import styles from './index.scss';

import { home } from 'services/api';

export default class HomePage extends React.PureComponent {

  componentDidMount() {
    home().then(data => {
      console.log(data)
    })
  }
  render() {
    return (
      <div className={styles.root}>
        <TabBar />
      </div>
    )
  }
}