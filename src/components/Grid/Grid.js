import React, { useState, useEffect } from 'react';
import styles from './Grid.css';
import { makeRandomGap } from '../../help/makeRandomGap';

const Grid = () => {
  const [holeNumbers, setHoleNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  let i = 0;
  let gridArr = [];
  while(i < 225){
    gridArr.push(
      i
    );  
    i++; 
  }
  const gridLis = gridArr.map(i => {
    if(holeNumbers.includes(i)){
      return (<li key={i} value={i} style={{ backgroundColor:'black' }}>{i}</li>);
    }
    return (<li key={i} value={i}>{i}</li>);
  });

  useEffect(() => {
    const gapNumbers = makeRandomGap();
    setHoleNumbers(gapNumbers);
  }, [loading]);

  setTimeout(()=> {
    setLoading(!loading);
  }, 7000);
  
  
  return (
    <ul className={styles.Grid}>
      {gridLis}
    </ul>
  );
}
;

export default Grid;
