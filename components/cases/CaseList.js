import CaseItem from "./CaseItem"
import { Grid } from "../styles/Grid.styled";
const CaseList = ({array}) => {
console.log("list:", array)

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


