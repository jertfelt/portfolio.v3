import styled from "styled-components";

export const Line = styled.div`
height: 3px;
width:100%;
background-color: ${({theme}) => theme.colors.white};
`

const Squiggly = styled.div`
overflow: hidden;
position: relative;
width: 130%;
height: 30px;
margin-left:-3rem;
`
const Ellipse = styled.div`
  position: absolute;
  background: radial-gradient(ellipse, transparent, transparent 7px, white 7px, white 10px, transparent 11px);
  background-size: 36px 40px;
  width: 100%;
  height: 20px;
}`

const Ellipse_2= styled.div`
position: absolute;
background: radial-gradient(ellipse, transparent, transparent 7px, white 7px, white 10px, transparent 11px);
background-size: 36px 40px;
width: 100%;
height: 20px;
  top: 20px;
  left: 18px;
  background-position: 0px -20px;
  `

export const SquigglyLine = () => {
  return (
    <Squiggly>
    <Ellipse/>
    <Ellipse_2/>
    </Squiggly>   
  )

}