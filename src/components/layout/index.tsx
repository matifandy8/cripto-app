import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({children}: {children: ReactNode}): JSX.Element  => {
  return (
      <>
       <Navbar/>
       {/* navbar when is login the user */}
       {children}
       <Footer/>
       </>
  );
};

export default Layout;