import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import HomePage from "../pages/homePage/HomePage.jsx";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route index element={ <HomePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;