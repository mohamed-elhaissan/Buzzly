import {Routes,Route} from "react-router-dom";
import Home from "./components/Website/Home.tsx";
import Documentation from "./components/Website/Documentation.tsx";



const PageRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/documentation" element={<Documentation/>}/>
        </Routes>
    )
}
export default PageRoutes;