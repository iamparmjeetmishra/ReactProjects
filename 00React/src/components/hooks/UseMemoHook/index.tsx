import { useState, useMemo } from "react";
import { initialItems } from "../../components/utils/utils";

interface DemoProps {}

const UseMemoHook = ({}: DemoProps) => {
 const [count, setCount] = useState(0);
 const [items] = useState(initialItems);
 // const selectedItem = items.find((item) => item.isSelected)

 const selectedItem = useMemo(
     () => items.find((item) => item.isSelected), [items]
 )

//  const selectedItem = useMemo(
//   () => items.find((item) => item.id === count),
//   [count]
//  );

 return (
  <>
   <h4>Use memo</h4>
   <h1>Count: {count}</h1>
   <h3>Selected item {selectedItem?.id}</h3>
   <button onClick={() => setCount(count + 1)}>Incre</button>
  </>
 );
};

export default UseMemoHook;
