import CaseList from "../../components/cases/CaseList";

const CasesPage = (props) => {

 
  return ( 
    <div>
      <CaseList 
      items= {props.cases} />
      
    </div>
     
   )
}


export default CasesPage;