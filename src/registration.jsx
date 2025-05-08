import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./registration.css";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Registration() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/poststudentdetails', {
      user, email, password, role
    })
    .then(res => {
      alert("Registered Successfully!");
      window.location.reload();
    })
    .catch(err => console.log(err));
  };

    return (
      <div class=" text-center ">
      <div class="row mtmb  ">
        <div class="col-lg-3">
          
        </div>
          <div class="col-md-6  bgform  border fborder shadow  text-white ">

            <form action="" className=" p-3 mb-4 rdown " onSubmit={handleSubmit}>
              <span className="  mb-5  "> REGISTRATION</span>
              
              <div className="mb-3">
        <label className="form-label text-start">Username</label>
                    <input type="text" className="form-control  " placeholder="Enter your name"
                        onChange={(e) => { setUser(e.target.value) }} />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
                    <input type="email" className="form-control " placeholder="Enter your email"
         onChange={(e) => { setEmail(e.target.value) }} />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
                    <input type="password" className="form-control " placeholder="Enter your password"
         onChange={(e) => { setPassword(e.target.value) }} />
      </div>

      <div className="mb-3">
        <label className="form-label">Role</label>
                    <input type="text" className="form-control  " placeholder="Student or Admin"
         onChange={(e) => { setRole(e.target.value) }} />
      </div>

      <button type="submit" className="btn btn-primary ">Register</button>

      <div className=" ">
        <span>Already have an account?</span>&nbsp;
        <Link to="/login"><span>Login</span></Link>
      </div>
              

          </form>
            
          
        </div>
        <div class="col-md-3">
          
        </div>
      </div>
    </div>
      
  );
}
 
// <div className="col"></div>
        
// <div className="col-6">
//   <div className="form-container  "  >
//     <h3 className="text-center mb-4">Registration</h3>
//     <form onSubmit={handleSubmit}> 
//       <div className="mb-3">
//         <label className="form-label">Username</label>
//                     <input type="text" className="form-control inpw" placeholder="Enter your name"
//                         onChange={(e) => { setUser(e.target.value) }} />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Email</label>
//                     <input type="email" className="form-control inpw " placeholder="Enter your email"
//          onChange={(e) => { setEmail(e.target.value) }} />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Password</label>
//                     <input type="password" className="form-control inpw " placeholder="Enter your password"
//          onChange={(e) => { setPassword(e.target.value) }} />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Role</label>
//                     <input type="text" className="form-control inpw " placeholder="Student or Admin"
//          onChange={(e) => { setRole(e.target.value) }} />
//       </div>

//       <button type="submit" className="btn btn-primary w-100">Register</button>

//       <div className="button d-flex justify-content-center mt-3">
//         <span>Already have an account?</span>&nbsp;
//         <Link to="/login"><span>Login</span></Link>
//       </div>
//     </form>
//   </div>
// </div>
// <div className="col"></div>