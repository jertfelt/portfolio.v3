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
const Filter = styled.div`
${flex}
margin-bottom:2rem;

*,
*::before,
*::after {
  box-sizing: border-box;
}
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  
}
select::-ms-expand {
  display: none;
}
.selectmenu{

  font-family: Arya;
  margin-top:1rem;
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid ${({theme}) => theme.colors.purple};
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: ${({theme}) => theme.colors.white};
  background-image: linear-gradient(to top, ${({theme}) => theme.colors.lightblue}, ${({theme}) => theme.colors.white}33%);
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
}
select,
.selectmenu:after {
  grid-area: select;
  
}
.selectmenu:after{
  justify-self: end;
}
.selectmenu::after{
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: ${({theme}) => theme.colors.purple};
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}

option{
  font-family:Arial;
}
`


const Cases = () => {
  const [selected, setSelected] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showAll, setShowAll] = useState(true);
const [dataFb, setData] = useState([])
const [cases, setCases] = useState([])
const options = []
const [filtoptions, setOptions] = useState([])

const getData = () => {
  const dbRef = ref(getDatabase());
get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
  if (snapshot.exists()) {
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
  if(dataFb){
    const t = dataFb.map(item => item.tag)
    let options = [...new Set(t)]
    setOptions(options)
  }
},[])


const checkOption =(e)=>{
 
  if(e.target.value ==="showMeAll"){
    setShowFilter(false);
    setShowAll(true);
  }
  else{
    if(dataFb){
      setShowFilter(true);
      setShowAll(false);
      const featured = dataFb.filter(item => (item.tag === e.target.value))
      setCases(featured)
      console.log(featured, "setted")
    }
  }
  }

  const capitalize = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }

  return (
    <Container xlarge>
      <Content>
      <h1>Cases:</h1>
      
      <Filter>
        <label for="selectfilter">Välj ett ämne:</label>
        <span className="selectmenu">
        {!filtoptions &&<>Går ej att filtrera just nu</>}
        {filtoptions && <>
          <select id="selectfilter"
          onChange={(checkOption)}>
    <option 
              value="showMeAll">Visa alla!</option>
             
                {filtoptions.map((item,index) => 
                 (
                  <option 
                  key= {index}
                  value={item}>{capitalize(item)}
                    </option>
                ))}
            
          </select>
          </>}
          </span>
      </Filter>
      <>{!dataFb && <>...Laddar sidan</>}

      {showFilter && <>
      {cases && 
      <div>
      <p>Antal träffar: {cases.length}</p>
      <CaseList
      array = {cases}
      >
      </CaseList>
      </div>}
      </>}

      {showAll && <>
      {dataFb && 
       <div>
       <p>Antal träffar: {dataFb.length}</p><CaseList
      array = {dataFb}
      >
      </CaseList>
      </div>}
      </>
      }
      </>
  
      
      </Content> 
    </Container>
  );
}
 
export default Cases;
