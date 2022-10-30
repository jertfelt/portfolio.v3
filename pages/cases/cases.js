// import Data from '../../components/api/Data'
import CaseList from "../../components/cases/CaseList";
// import { getAllCases } from "../../utils/api-util";
import Data from '../../components/api/Data'
import { getAllCases } from "../../components/api/Data";

export async function getStaticProps() {
  const cases = await getAllCases();
  return {
      props: {
          cases: cases
      }, 
  }
}

const CasesPage = (props) => {
  console.log("props:", props.cases)
  return ( 
    <div>
      <CaseList 
      items= {props.cases} />
      <Data/>
    </div>
     
   )
}


export default CasesPage;