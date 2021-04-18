# React Fib

Calculate fibonacci sequence using **React Components**!

Usage:
```sh
npm install react-fib
```

```jsx
import { FibN } from 'react-fib';
import { FibArr } from 'react-fib';

function App() {
  return (
    <div>
      <FibN n="10" /> {/* will return "89" */}
      <FibArr len="11" /> {/* will return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] */}
    </div>
  )
}
```