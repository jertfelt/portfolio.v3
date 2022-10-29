export function toggleMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

 
    menuOpen ? (setMenuOpen(false)) : (setMenuOpen(true))
    console.log("now it is:", menuOpen)


  return  menuOpen;

}