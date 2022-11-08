import Link from "next/link";
import { useEffect, useState } from "react";

const CaseItem = ({ item, index, tags}) => {

console.log("tags:", tags)
  const [clName, setClName] = useState(null);
  useEffect(()  => {
    if (index %3 === 0){
      setClName("first")
    }
    else if (index %2 === 0){
      setClName("third")
    }
  },[])

  return (
    <Link href={'/cases/' + item.id} 
    state={{data: item.id}}
    key={item.id}
    className={clName}>
      <h3>{item.title}</h3>
      <p>{item.sub}</p>
 
    </Link>
  );
}
export default CaseItem;




// 