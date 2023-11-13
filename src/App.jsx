import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
   <div className="overflow-x-hidden">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>
   
    
    
   
   </div>
  )
}

export default App