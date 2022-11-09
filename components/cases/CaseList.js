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



  return ( 
 
    
    <Grid>
      
    
        {array.map((c, index) => 
          (<CaseItem
            key={c.id}
            item= {c}
            index= {index}
            />
            ))}
   
       
    </Grid>
   
   );
}
 
export default CaseList;


