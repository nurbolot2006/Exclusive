import { Outlet } from "react-router";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import TopBar from "./topBar/TopBar.jsx";

const Layout = () => {
    return (
        <div>
            <TopBar/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;