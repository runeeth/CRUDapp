import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./App.css";
 import "./registration.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    axios.post("http://localhost:3001/logindet", { email, password })
      .then(res => {
        console.log("Response:", res);
        if (res.data.message === true) {  // Assuming the server returns a boolean for message
          alert("Welcome");
          switch (res.data.user) {
            case "admin":
              navigate("/admindashboard");
              break;
            case "student":
              navigate("/studentdashboard");
              break;
            default:
              alert("Unexpected user status");
          }
        }
        else {
            
          alert("Incorrect username or password");
        }
      })
      .catch(err => {
        console.error(err);
        alert("An error occurred");
      });
  };

  return (
   
    <div class=" text-center ">
  <div class="row logmtmb">
    <div class="col">
      
    </div>
    <div class="col border fborder  text-white  bgform">
       <h3 className="text-center mb-4">Login</h3>
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
  
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
  
      <button type="submit" className="btn btn-primary ">Login</button>
  
      <div className="mt-3 text-center">
          <a href="/" className="btn btn-primary  mt-2 mb-4">Register</a>
          
      </div>
    </form>
          




    </div>
    <div class="col">
      
    </div>
  </div>
</div>
  
  );
}
 
//  <div className="login-box">
//     <h3 className="text-center text-primary mb-4">Login</h3>
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email</label>
//         <input
//           type="email"
//           id="email"
//           className="form-control"
//           placeholder="Enter email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
  
//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">Password</label>
//         <input
//           type="password"
//           id="password"
//           className="form-control"
//           placeholder="Enter password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
  
//       <button type="submit" className="btn btn-primary w-100">Login</button>
  
//       <div className="mt-3 text-center">
//           <a href="/" className="btn btn-outline-secondary w-100 mt-2">Register</a>
          
//       </div>
//     </form>
//   </div>
  