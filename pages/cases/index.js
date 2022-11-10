import styled from "styled-components";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"

//next and react
import {useState, useEffect, useCallback } from "react";

//firebase:
import { getData, getTag, getTags } from "../../components/api/cases";

//components
import CaseList from "../../components/cases/CaseList.js";
import { capitalize } from "../../components/helpers/capitalize.js";

import cases from "../../data/cases"



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
    background-color:${({theme}) => theme.colors.vividblue};
    color: ${({theme}) => theme.colors.lightblue};
  }
}
.first{
 
  color: ${({theme}) => theme.colors.lightblue};
  
  &:hover{
  border-radius:${({theme}) => theme.borderradius.first};
  background-color:${({theme}) => theme.colors.lightblue};
  color: ${({theme}) => theme.colors.purple};
  }
}
.second{

  color: ${({theme}) => theme.colors.white};
  
  &:hover{
    border-radius:${({theme}) => theme.borderradius.second};
    background-color:${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
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

const WordCloud = styled.div`
${flex({align:"flex-start", justify:"flex-start"})}
float: left;

div{
  max-width:400px;
  flex-wrap:wrap;
  ${flex({direction:"row", align:"flex-start", justify:"flex-start"})}
  gap:10px;
p{
  line-height:4px;
  font-size:12px;
  &:hover{
    color: ${({theme}) => theme.colors.vividblue};
    cursor: none;
  }
}

}


`

const Cases = () => {
const [showFilter, setShowFilter] = useState(false);
const [showAll, setShowAll] = useState(true);
const [allData, setallData] = useState(null);
const [cases, setCases] = useState([])
const [filtoptions, setOptions] = useState([])
const [tags, setTags] = useState([]) 


const fetchData = useCallback(async () => {
  const newData = await getData();
  setallData(newData)
  const newTagsList = await getTag();
  setOptions(newTagsList)
  const allTags = await getTags();
  setTags(allTags)
})

useEffect(() => {
  fetchData().catch(console.error)
}, [])

const checkOption =(e)=>{
  if(e.target.value ==="showMeAll"){
    setShowFilter(false);
    setShowAll(true);
  }
  else{
      setShowFilter(true);
      setShowAll(false);
      const featured = allData.filter(item => (item.tag === e.target.value))
      setCases(featured)
  }
  }

  return (
    <Container xlarge>
      <Content>
      <h1>Cases:</h1>
      <Filter>
        <label htmlFor="selectfilter">Välj ett ämne:</label>
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
      <>{!allData && <>...Laddar sidan</>}

      {showFilter && <>
      {cases && 
      <div>
      <CaseList
      array = {cases}
      >
      </CaseList>
      <p>Antal: {cases.length}</p>
      </div>}
      </>}

      {showAll && <>
      {allData && 
       <div>
       <CaseList
      array = {allData}
      >
      </CaseList>
      <p>Antal: {allData.length}</p>
      </div>}
      </>
      }
       <WordCloud>
          <div>
        {tags.map((item,index) => (
         <p key={index}>#
          {capitalize(item)}</p>
        ) )}
        </div>
      </WordCloud>
      </>
    
      </Content> 
     
    </Container>
  );
}

export default Cases;
