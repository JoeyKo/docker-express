import React, { useEffect } from 'react';
import { home } from 'services/api';
import styles from './Home.module.scss';

export default function HomePage() {

  useEffect(() => {
    home().then(data => {
      // eslint-disable-next-line no-console
      console.log(data)
    })
  })

  return (
    <div className={styles.root}>
        content
    </div>
  )
}