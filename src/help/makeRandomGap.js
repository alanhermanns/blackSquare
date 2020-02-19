export const makeRandomGap = () => {
  let size = Math.floor(Math.random() * 9);
  let start = Math.floor(Math.random() * 200);
  const makeGap = () => {
    let k = 0;
    let arr = [];
    while(k <= size * 15){
      let i = -1;
      while(i < size){
        i++;
        arr.push(start + i + k);
      }
      k = k + 15;
    }
    return arr;
  };
  return [makeGap.call(null, size)];
}
;
