import React, { useEffect } from 'react';
import Navigation from 'components/Navigation';
import styles from './index.scss';

import { home } from 'services/api';

export default function HomePage() {

  useEffect(() => {
    home().then(data => {
      console.log(data)
    })
  })

  return (
    <div className={styles.root}>
      <Navigation />
    </div>
  )
}