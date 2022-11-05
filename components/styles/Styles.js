import styled, {css} from "styled-components";

// mixins
export const flex = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`


export const Row = styled.span`
${flex}
gap: 10px;`

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
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
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


//https://gist.github.com/ralphwengerek/4124325e1fb789f1e17f87e187198d6e