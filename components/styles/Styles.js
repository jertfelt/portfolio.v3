import styled from "styled-components";

// mixins
export const flex = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`

const size = {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    maxmobile: `(max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
    maxtablet: `(max-width: ${size.laptop})`
  };

  const borderoptions = {
    small: "9px",
    medium: "19px",
    round: "9999px",
    percent: "50%",
    none: "none" 
  }

  export const borders = {
    slight : `border-radius: ${borderoptions.small}`,
    rounded : `border-radius: ${borderoptions.medium}`,
    round : `border-radius: ${borderoptions.round}`,
    none: `border: ${borderoptions.none}`
  }


  export const Row = styled.span`
display:flex;
flex-direction:row;
align-items:center;
gap: 1rem;
@media (max-width: ${size.mobileL}){
  display:flex;
  flex-direction:column;
}
`
