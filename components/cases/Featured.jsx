import CasefItem from "./CasefItem"
import { useEffect, useState } from "react"

const Featured = ({array}) => {
  const [data, setData] = useState(array)
  let featuredCases = []
  useEffect(() => {
    array.map((c => {
      if(c.featured === true)
          featuredCases.push(c)
          console.log(featuredCases, "feat")
          setData(featuredCases)
    }))
  }, [])
  return ( 
<>
      {!data && <p>..Laddar</p>}
        {data.map((c) => 
          (<CasefItem
          key={c.id}
          item= {c}
          index={c.id}
          />
          ) 
        )}
</>
  );
}

 
export default Featured;


