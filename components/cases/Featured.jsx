import { useState, useEffect } from "react";
import CasefItem from "./CasefItem"

const Featured = ({cases}) => {
  return ( 
<>
         {cases.map((c) => 
          (
          <CasefItem
          key={c.id}
          item= {c}
          index={c.id}
          />
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