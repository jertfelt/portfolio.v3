import { useEffect, useState } from "react"
import { cases } from "../../data/cases"


  // if (cases === undefined){
  //   console.log("Error with firebase/ props")
    // }

const ShowCases = () => {
  const [newcases, setCases] = useState([])
  useEffect(() => {
    const featured = cases.filter(item => (item.featured === true))
    console.log(featured)
    // setCases(featured)
  }, [])

  return (
  <>
  {/* <div>
  {newcases.map(item => (
    <div
    key={item.id}>
      <h3>{item.headline}</h3>
    </div>
  ))}
  </div> */}
  </>  
  );
}
 
export default ShowCases;