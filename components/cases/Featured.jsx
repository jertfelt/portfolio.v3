import CasefItem from "./CasefItem"
import { useEffect, useState } from "react"

const Featured = ({array}) => {
 


// useEffect(() => {
//   Object.filter = (obj, predicate) => 
//   Object.assign(...Object.keys(obj)
//                   .filter( key => predicate(obj[key]) )
//                   .map( key => ({ [key]: obj[key] }) ) );


// let filtered = Object.filter(array, item => item.featured === true); 
// console.log(filtered, "filt");

// },[])
const [test, setTest] = useState([])

useEffect(() => {
  let filtered = array.filter(item => item.featured === true);
  console.log(filtered, "filter")
  setTest(filtered)
},[])
  return ( 
<>
        {test.map((c) => 
      
          (<CasefItem
          key={c.id}
          item= {c}
          index={c.id}
          />
          ) 
        )}
        {!array && <p>..Laddar</p>}
</>
  );
}

 
export default Featured;


