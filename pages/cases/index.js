import styled from "styled-components";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import {Grid} from "../../components/styles/Grid.styled"

//next and react
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect } from "react";

//firebase
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";

//components
import { SelectFilter } from "../../components/cases/SelectFilter.js";
import CaseList from "../../components/cases/CaseList.js";

const Content = styled.section`
min-height:130vh;
${flex}
font-family: Roboto;

h1{
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.large};
}

a{
  text-decoration: none;
  color: ${({theme}) => theme.colors.lightblue};
  padding:2rem;
  background-color: ${({theme}) => theme.colors.purple};
  border-radius:29px;
  text-align:center;
  &:hover{
    color: ${({theme}) => theme.colors.white};
    border-radius:${({theme}) => theme.borderradius.third};
    
  }
}
.first{
  &:hover{
  border-radius:${({theme}) => theme.borderradius.first};
 
  }
}
.second{
  &:hover{
    border-radius:${({theme}) => theme.borderradius.second};
  
    }
}
`
//https://frontend-portfolio-446fc-default-rtdb.europe-west1.firebasedatabase.app/cases

const Cases = () => {
  const [selected, setSelected] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showAll, setShowAll] = useState(true);
const [dataFb, setData] = useState(null)

const getData = () => {
  const dbRef = ref(getDatabase());
get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log("array", snapshot.val());
   setData(snapshot.val())
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

useEffect(() => {
  initFirebase("cases/");
  getData();
},[])

console.log(dataFb, "dataFB")



const checkOption =(e)=>{
  setSelected(e.target.value)
  setShowFilter(true);
  setShowAll(false);
  if(e.target.value ==="showMeAll" || e.target.value ==="pickOne"){
    setShowFilter(false);
    setShowAll(true);
  }
  }



  return (
    <Container xlarge>
      <Content>
      <h1>All Cases</h1>
      {/* <div>
      <h4>Filtrering:</h4>
          <select onChange={(checkOption)}>
           <option 
              value="pickOne">
                Välj en:</option>
            <SelectFilter
             items= {dataFb}></SelectFilter>
             <option 
              value="showMeAll">Visa alla!</option>
          </select>
      </div> */}
      <>{!dataFb && <>...Laddar sidan</>}
      {dataFb && <CaseList
      array = {dataFb}
      >
      </CaseList>}
      </>
  
      
      </Content>
    </Container>
  );
}
 
export default Cases;
