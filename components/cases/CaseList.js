import CaseItem from "./CaseItem"
import { Grid } from "../styles/Grid.styled";
import { useState, useEffect } from "react";
import { SelectFilter } from "./SelectFilter";

const CaseList = ({array}) => {

const [data, setData] = useState([])
let tagsarray = [];
let filteredCases = [];
const [tagsData, setTags] = useState([])
const [selected, setSelected] = useState("");
const [showFilter, setShowFilter] = useState(false);
const [showAll, setShowAll] = useState(true);
const [filtered, setFiltered] = useState([]);
const [error, showError] = useState(false)

// useEffect(() => {
//   array.map((c => {
//     console.log("testCASELIST:", c.tags)
//     tagsarray.push(c.tags)
//     filteredCases.push(c)
//       setTags(tagsarray)
//       setData(filteredCases)
//   }))


  
// }, [])

// const checkOption =(e)=>{
//   changeFilter(e.target.value);
//   setSelected(e.target.value);
//   if(e.target.value ==="showMeAll" || e.target.value ==="pickOne"){
//     setShowFilter(false);
//     setShowAll(true);
//   }
//   else{

//   }
//   }

  return ( 
    <>
    {/* <div>
      <select onChange={(checkOption)}>
           <option 
            value="pickOne">Filtrera:</option>
            <option
            value="studentarbete">Studentarbete</option>
            <option
            value="eget">Eget arbete</option>
             <option 
              value="showMeAll">Visa alla!</option>
          </select>
     
      <button value="showMeAll"
       onClick={(checkOption)}>Visa alla!</button>
    </div> */}
    
    <Grid>
      {error && <div><h2>Hoppsan! Den här kategorin är tom! </h2></div>}
      {showAll && 
      <>
        {array.map((c, index) => 
          (<CaseItem
            key={c.id}
            item= {c}
            index= {index}
            />
            ))}
         </> }
      {showFilter &&  <>
        {/* {filtered.map((c, index) => 
          (<CaseItem
            key={c.id}
            item= {c}
            index= {index}
            />
            ))} */}
         </> }
    </Grid>
    </>
   );
}
 
export default CaseList;


