import React from 'react';
import styles from './styles.module.css';

export default function Callout({title, tone = 'info', children}) {
  return (
    <aside className={`${styles.callout} ${styles[tone] || styles.info}`}>
      {title ? <strong className={styles.title}>{title}</strong> : null}
      <div>{children}</div>
    </aside>
  );
}