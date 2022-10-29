import styled from "styled-components";

const WordsSection = styled.section`
height: 100vh;
padding:2rem;
padding-bottom: ${({theme}) => theme.paddingSizes.large};
width:100%;
background-color: ${({theme}) => theme.colors.purple};
position: relative;
z-index:1;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}

&::after {
  background: inherit;
  content: '';
  display: block;
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
-webkit-transform: skewY(0deg);
transform: skewY(0deg);
-webkit-transform-origin: 100%;
transform-origin: 100%;
}

`

const WordsAboutMe = () => {
  return ( <WordsSection>
    
  </WordsSection> );
}
 
export default WordsAboutMe;