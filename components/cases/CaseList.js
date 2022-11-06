import CaseItem from "./CaseItem"
const CaseList = (props) => {
  console.log(props )
  const {items} = props;
  return ( 
    <ul>
     {items.map(c => <CaseItem
      key={c.id}
      />)} 
    </ul>
   );
}
 
export default CaseList;