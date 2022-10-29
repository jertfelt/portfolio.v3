import styled from "styled-components";

const wh = (w, h = w) => `
  width: ${w};
  height: ${h};
`;

const flexInst = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`
// ${flexInst({direction: "column"})}


const MainHP = styled.main`
background-color:${({theme}) => theme.colors.grey};
`

const PageWrapper = styled.div`
${flexInst}
`


const Homepage = () => {

  return (
  <MainHP>
    <PageWrapper>

    </PageWrapper>

  </MainHP>  );
}
 
export default Homepage;