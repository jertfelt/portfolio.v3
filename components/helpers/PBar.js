

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
      bgcolor = "blue";
      fcolor = "black";
      break;
    case "CSS":
        bgcolor = "red";
        fcolor = "black";
      break;  
    case "EJS":
        bgcolor = "#483d8b";
        fcolor = "white";
    break;
    default:
      bgcolor = "white";
  } 


  const fillerStyles = {
    height: '100%',
    width: `${amount}%`,
    backgroundColor: bgcolor,
    textAlign: 'left'
  }

  const labelStyles = {
    padding: 2,
    color: fcolor,
  }

  return ( 
    <>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${amount}%  `+ ``}</span>
      </div>
      </>
   );
}
 
export default PBar;