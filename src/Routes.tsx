import {Routes,Route} from "react-router-dom";
import Home from "./components/Home.tsx";



const PageRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}
export default PageRoutes;