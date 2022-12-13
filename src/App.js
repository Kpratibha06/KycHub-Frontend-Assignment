import './App.css';
import MyTable from './productDetails';
import MyCompareTable from './compareProducts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';


function App() {
  return (
    
    <BrowserRouter>
     <Navbar/>
     <div className='sidebarcontainer'>
          <Sidebar/>
    <div className='tablecontainer'>      
    <Routes>
        <Route path='/' exact element={<MyTable/>}/>
      <Route path= "/compare" element={<MyCompareTable/>}/>
   
    </Routes> 
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
