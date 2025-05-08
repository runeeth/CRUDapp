import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./registration.css"


function Update() {
    const [data, setData] = useState({
        user: "",
        email: "",
        password: "",        
        role: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details when component mounts or `id` changes
        axios.get(`http://localhost:3001/getstudentdetail/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.error('Error fetching student details:', err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:3001/updatestudentdetail/${id}`, data)
            .then(response => {
                console.log('Update successful:', response);
                navigate("/admindashboard");
            })
            .catch(error => console.error('Error updating student details:', error));
    };

    return (
       <div class="container text-center">
  <div class="row updmtmb text-white">
    <div class="col">
    
    </div>
    <div class="col border fborder shadow bgform ">
      
             <center><h1>Update Data</h1></center>
      
          <form onSubmit={handleSubmit} >
            <label>Student Name</label><br />
            <input
              className="form-control"
              type="text"
              name="user"
              value={data.user}
              onChange={handleChange}
            /><br />
      
            <label>Password</label><br />
            <input
              className="form-control"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            /><br />
      
            <label>Email</label><br />
            <input
              className="form-control"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            /><br />
      
            <label>Role</label><br />
            <input
              className="form-control"
              type="text"
              name="role"
              value={data.role}
              onChange={handleChange}
            /><br />
      
            <center>
              <button type="submit" className="btn btn-primary">Submit</button>
            </center>
          </form>


            
    </div>
    <div class="col">
      
    </div>
  </div>
</div>
    );
}

export default Update;
//  <div  >
//         <div className=' border move'>
//           <center><h1>Update Data</h1></center>
      
//           <form onSubmit={handleSubmit}>
//             <label>Student Name</label><br />
//             <input
//               className="form-control"
//               type="text"
//               name="user"
//               value={data.user}
//               onChange={handleChange}
//             /><br />
      
//             <label>Password</label><br />
//             <input
//               className="form-control"
//               type="password"
//               name="password"
//               value={data.password}
//               onChange={handleChange}
//             /><br />
      
//             <label>Email</label><br />
//             <input
//               className="form-control"
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//             /><br />
      
//             <label>Role</label><br />
//             <input
//               className="form-control"
//               type="text"
//               name="role"
//               value={data.role}
//               onChange={handleChange}
//             /><br />
      
//             <center>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </center>
//           </form>
//         </div>
//       </div>
      