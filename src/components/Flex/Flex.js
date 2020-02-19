import React from 'react';
import styles from './Flex';

const Flex = ({ children }) => {
    
  return <div className={styles.Flex}>
    {children}
  </div>;
    
};

export default Flex;
