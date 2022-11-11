import { useState, useEffect } from "react";
import CasefItem from "./CasefItem"

const Featured = ({cases}) => {
const [featured, setFeatured] = useState(cases)


useEffect(() => {
  const doubled = cases.map(nested => nested.map(element => element));
  return () => {
    setFeatured(doubled[0])
  }
}, [])

console.log(featured, "this will go")

  return ( 
<>
         {featured.map((c, index) => 
          (
            <>
          <CasefItem
          key={index}
          item= {c}
          index={c.id}
          />
          </>
          ) 
        )}
        {!cases && <p>..Laddar</p>} 
</>
  );
}

 
export default Featured;



// useEffect(() => {
//   Object.filter = (obj, predicate) => 
//   Object.assign(...Object.keys(obj)
//                   .filter( key => predicate(obj[key]) )
//                   .map( key => ({ [key]: obj[key] }) ) );