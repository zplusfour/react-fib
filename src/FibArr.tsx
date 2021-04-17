import React from 'react';
import farr from './farr';

type FibArrLen = string | number;
interface FibArrProps {
  len: FibArrLen;
}
const FibArr: React.FC<FibArrProps> = (props: FibArrProps) => {
  return <div>{farr(props.len)}</div>
}

export default FibArr;