import React, { useEffect } from 'react';
import Navigation from 'components/Navigation';
import { home } from 'services/api';
import styles from './index.scss';


export default function HomePage() {

  useEffect(() => {
    home().then(data => {
      // eslint-disable-next-line no-console
      console.log(data)
    })
  })

  return (
    <div className={styles.root}>
      <Navigation />
    </div>
  )
}