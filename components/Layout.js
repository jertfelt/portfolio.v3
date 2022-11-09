import Nav from "./Nav"
import Footer from "./Footer";
import  HeadComponent  from "./Head";

const Layout = ({children}) => {
  return (
    <>
    <HeadComponent/>
    <Nav/>
    {children}
    <Footer/>
    </>
    );
}
 
export default Layout;