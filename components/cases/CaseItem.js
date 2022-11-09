import Link from "next/link";
import { useEffect, useState } from "react";

const CaseItem = ({ item, index, tags}) => {

  const [clName, setClName] = useState(null);
  useEffect(()  => {
    console.log(index)
    if (index === 0){
      setClName("initial")
    }
    else if (index %2 === 0){
      setClName("second")
    }
    else if (index %3 === 0){
      setClName("first")
    }
    else{
      setClName("initial")
    }
  },[])

  return (
    <Link href={'/cases/' + item.id} 
    state={item.id}
    key={item.id}
    className={clName}>
      <h3>{item.title}</h3>
      <p>{item.sub}</p>
    </Link>
  );
}
export default CaseItem;




// 