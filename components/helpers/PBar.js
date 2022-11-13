import { useState } from "react";

const PBar = (props) => {
  const {name, amount} = props;
  let newname = name.toUpperCase();
  let bgcolor = "black"
  let fcolor = "white"

  switch(newname) {
    case "JAVASCRIPT":
      bgcolor = "#bee5f5";
      fcolor = "black";
      break;
    case "HTML":
      bgcolor = "black";
      break;
    case "SCSS":
      bgcolor = "#344ce6";
      fcolor = "white";
      break;
    case "CSS":
        bgcolor = "red";
        fcolor = "black";
      break;  
    case "EJS":
        bgcolor = "#483d8b";
        fcolor = "white";
    break;
    case "Shell":
        bgcolor = "#483d8b";
        fcolor = "white";
    break;
    default:
      bgcolor = "#483d8b";
      fcolor = "white";
  } 


  const fillerStyles = {
    marginTop:"-2rem",
    height: '100%',
    width: `${amount}%`,
    backgroundColor: bgcolor,
    textAlign: 'left',
    padding:"2px"
  }

  const labelStyles = {
    padding: 3,
    color: fcolor,
  }

  const [isShown, setIsShown] = useState(false);


  return ( 
    <>
      <div style={fillerStyles} 
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
        {isShown && (
        <span style={labelStyles}>
          {`${amount}%  `+ ``}
          </span>)}
          {!isShown && (
            <span style={labelStyles}>
            {`${name}`}
            </span>)}
      </div>
      </>
   );
}
 
export default PBar;