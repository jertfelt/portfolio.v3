import CasefItem from "./CasefItem"
import { Grid } from "../styles/Grid.styled";
import { useEffect, useState } from "react"
import { cases } from "../../data/cases"
import styled, {css} from "styled-components"
import Link from "next/link"

import { flex, device } from "../styles/Styles";
import Image from "next/image"



const Featured = ({array}) => {
  const [data, setData] = useState([])
  let featuredCases = []
  console.log("fea:", array)

  useEffect(() => {
    array.map((c => {
      if(c.featured === true)
          featuredCases.push(c)
          console.log(featuredCases, "feat")
          setData(featuredCases)
    }))
  }, [])

  console.log("kollar array:", featuredCases)
  return ( 
    <>
        {data.map((c) => 
       (<CasefItem
        key={c.id}
        item= {c}
        index={c.id}
  />
  )
        )}
    </>
 
   );
}

 
export default Featured;


