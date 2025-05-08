
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './registration'
import Login from './login';
import Admin from './admindashboard';
import Student from './studentdashboard';
import Update from './updatestudent';
import Delete from './deletestudent';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
          
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
        
       
          {/* <Route path="/viewstudents" element={<Viewstudent/>}></Route> */}

          <Route path="/admindashboard" element={<Admin />}></Route>
          <Route path="/studentdashboard" element={<Student />}> </Route> 
        
        <Route path= "/updatestudent/:id" element={<Update/>}></Route>
        <Route path="/deletestudent/:id" element={<Delete />}></Route> 
        {/* {/* <Route path="/addstudent" element={<Addstudent />}></Route> */}
        
        {/* <Route path="/studentdashboard" element={<Student />}> </Route>  */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
