import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-white dark:bg-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;