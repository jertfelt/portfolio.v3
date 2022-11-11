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

import { cases } from "../../data/cases";
const casesDb = {cases};

const Content = styled.section`
min-height:130vh;
${flex}
font-family: Roboto;

h1{
  margin-top:6rem;
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.xlarge};
  text-transform: uppercase;
  margin-bottom:-1rem;
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
const Intro = styled.div`
${flex({direction:"row"})}
width:80%;
gap:30px;
margin-bottom:1rem;`

const Text = styled.p`
max-width:40%;
line-height:1.8rem;`

const Filter = styled.div`
${flex}

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
  //*------from cases.js in data, instead of fb:
  const [cases, setCases] = useState(casesDb.cases)
  let utag = [...new Set(casesDb.cases.map(item => item.tag))]
  const [tag, setTag] = useState(utag)
  let unique = [...new Set(casesDb.cases.map(item => item.tags.c1).concat(casesDb.cases.map(item => item.tags.c2),casesDb.cases.map(item => item.tags.c3)))]
  const [dbTags, setDbTags] = useState(unique)

  //fb:
  const [result, setResult] = useState(null)
  const [tags, setTags] = useState(null)
  const [ogTag, setOGTag] = useState(null)

const fetchData = useCallback(async () => {
  const newData = await getData();
  setResult(newData)
  const newTagsList = await getTag();
  setTags(newTagsList)
  const allTags = await getTags();
  setOGTag(allTags)
})

useEffect(() => {
  fetchData().catch(console.error)
}, [])

//both:
const [loading, setLoading] = useState(false)
const [showFilter, setShowFilter] = useState(false)
const [showAll, setShowAll] = useState(true)  
const [filter, setFiltered] = useState(cases);


const checkOption =(e)=>{
  if(e.target.value ==="showMeAll"){
    setShowFilter(false);
    setLoading(true);
    setShowAll(true);
  }
  else{
      setShowAll(false);
      setLoading(true);
      setShowFilter(true);
   
      const featured = cases.filter(item => (item.tag === e.target.value))
      setFiltered(featured)
  }
  }

  return (
    <Container xlarge>
      <Content>
      <h1>Cases:</h1>
      
      <Intro>
      <Text>Här är projekt jag jobbat på. De flesta är skoluppgifter under min tid på Nackademin, andra är egna projekt och/eller projekt jag deltar/tagit på under min praktik.
      </Text>
      <Filter>
        <label htmlFor="selectfilter">Välj ett ämne:</label>
        <span className="selectmenu">
{/* 
        {result && <>
        {!tags &&<>Går ej att filtrera just nu</>}
          {tags && <>
          <select id="selectfilter"
          onChange={(checkOption)}>
              <option 
              value="showMeAll">Visa alla!</option>
                {tags.map((item, index) => 
                (
                  <option 
                  key= {index}
                  value={item}>{capitalize(item)}
                    </option>
                ))}
          </select>
          </>}
          </>} */}

          {cases && <>
          {!tag &&<>Går ej att filtrera just nu</>}
          {tag && <>
          <select id="selectfilter"
          onChange={(checkOption)}>
              <option 
              value="showMeAll">Visa alla!</option>
                {tag.map((item, index) => 
                (
                  <option 
                  key= {index}
                  value={item}>{capitalize(item)}
                    </option>
                ))}
          </select>
          </>}
          </>}
        </span>
      </Filter>
      </Intro>
      {/* {result && <>
      {showFilter && <>
      <div>
      <CaseList
      array = {filter}
      >
      </CaseList>
      <p>Antal: {filter.length}</p>
      </div>
      </>}

      {showAll && <>
      <div>
      <CaseList
      array = {result}
      >
      </CaseList>
      <p>Antal: {result.length}</p>
      </div>
      </>
      }
      <WordCloud>
          <div>
        {ogTag.map((item,index) => (
        <p key={index}>#
          {capitalize(item)}</p>
        ) )}
        </div>
      </WordCloud>
      </>
      } */}

      {cases && <>
      {showFilter && <>
      <div>
      <p>Antal: {filter.length}</p>
      <CaseList
      array = {filter}
      >
      </CaseList>
      
      </div>
      </>}

      {showAll && <>
      <div>
      <p>Antal: {cases.length}</p>
      <CaseList
      array = {cases}
      >
      </CaseList>
      
      </div>
      </>
      }
      <WordCloud>
          <div>
        {dbTags.map((item,index) => (
        <p key={index}>#
          {capitalize(item)}</p>
        ) )}
        </div>
      </WordCloud>
      </>
      }


      
    
      </Content> 
     
    </Container>
  );
}

export default Cases;
