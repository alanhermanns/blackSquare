import React, { useState, useEffect } from 'react';
import styles from './Grid.css';
import { makeRandomGap } from '../../help/makeRandomGap';

const Grid = () => {
  const [holeNumbers, setHoleNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const nameArr = ['A', 'H', 'O', 'R', 'S', 'E', 'I', 'S', 'A', 'H', 'O', 'R', 'S', 'E'];

  let i = 0;
  let gridArr = [];
  while(i < 225){
    gridArr.push(
      i
    );  
    i++; 
  }
  let k = -1;
  const gridLis = gridArr.map(i => {
    if(k === 16){k = 0;}
    if(holeNumbers.includes(i)){
      k++;
      return (<li key={i} value={i} style={{ backgroundColor: 'black', color: 'white', opacity: '100%' }}>{nameArr[k]}</li>);
    }
    return (<li key={i} value={i}>{i}</li>);
  });

  useEffect(() => {
    const gapNumbers = makeRandomGap()[0];
    setHoleNumbers(gapNumbers);
  }, [loading]);

  setTimeout(()=> {
    setLoading(!loading);
  }, 7000);
  
  
  return (
    <>
      <ul className={styles.Grid}>
        {gridLis}
      </ul>
    </>
  );
}
;

export default Grid;
