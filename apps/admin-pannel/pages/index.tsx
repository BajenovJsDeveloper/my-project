import React from 'react';
import styles from './index.module.scss';
import Box from '@material-ui/core/Box';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.main}>
      <Box className={styles.main__text}> A new page</Box>
    </div>
  );
}

export default Index;
