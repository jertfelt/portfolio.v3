const TechNames = (props) => {
  const {amount, name} = props;


  let newname = name.toUpperCase();
  let bgcolor = "white"
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


  const fill = {
    marginTop: "-5rem",
    height: '100%',
    width: `${amount}%`,
    textAlign: 'left'
  }

  return ( 
    <div style={fill}>
      <span>{`${name}:`+ ` ${amount}%`}</span>
    </div>
   );
}
 
export default TechNames;