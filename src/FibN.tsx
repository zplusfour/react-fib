import React from 'react';
import f from './f';

type FibNNumber = number | string;
interface FibNProps {
  n: FibNNumber;
}
const FibN: React.FC<FibNProps> = (props: FibNProps) => {
  return <div>{f(props.n)}</div>;
}

export default FibN;