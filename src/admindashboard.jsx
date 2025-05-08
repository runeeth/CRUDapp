import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./registration.css"


function Admin() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        axios.get("http://localhost:3001/viewstudentdetails")

            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);


            });
    }, []);


    return (
        <div>
            <div class="container text-center">
  <div class="row admtmb ">
    <div class="col">
      
    </div>
    <div class="col  ">
        
             <table class="table  tableborder  caption-top bg-white  mt-2  container ">
                        <caption className="text-white fs-5 "> DETAILS OF STUDENTS </caption>
                        <thead>
                            <tr>
                                <th scope="col">studentname</th>                     
                                <th scope="col">email</th>
                                <th scope="col">password</th>
                                <th scope="col">role</th>
                                <th scope="col">action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value, key) => {
                                return (
                                    <tr>
                                        {/* <tr scope = "row">{key}</tr> */}
                                        <td>{value.user}</td>
                                       
                                     
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
                                        <td>{value.role}</td>

                                        <td><Link to={`/updatestudent/${value._id}`}> <button className='btn btn-primary'>Update</button></Link></td>
                                        <td><Link to={`/deletestudent/${value._id}`}> <button className='btn btn-danger'>Delete</button></Link></td>
                                    </tr>
                                );
                            })}


                        </tbody>
                    </table>            

    </div>
    <div class="col">
      
    </div>
  </div>
</div>

       </div>
    )
}

export default Admin

//  <div className=' movecenter' >


//             <div className='row'>
//                 <div className='col-md-1'></div>
//                 <div className='col-md-10'>
//                     <table class="table caption-top bg-white rounded mt-2 col-md-6 container ">
//                         <caption className="text-blue fs-5 "> details</caption>
//                         <thead>
//                             <tr>
//                                 <th scope="col">studentname</th>                     
//                                 <th scope="col">email</th>
//                                 <th scope="col">password</th>
//                                 <th scope="col">role</th>
//                                 <th scope="col">action</th>

//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((value, key) => {
//                                 return (
//                                     <tr>
//                                         {/* <tr scope = "row">{key}</tr> */}
//                                         <td>{value.user}</td>
                                       
                                     
//                                         <td>{value.email}</td>
//                                         <td>{value.password}</td>
//                                         <td>{value.role}</td>

//                                         <td><Link to={`/updatestudent/${value._id}`}> <button className='btn btn-primary'>Update</button></Link></td>
//                                         <td><Link to={`/deletestudent/${value._id}`}> <button className='btn btn-danger'>Delete</button></Link></td>
//                                     </tr>
//                                 );
//                             })}


//                         </tbody>
//                     </table>
//                 </div>
//                 <div className='col-md-1'></div>
//             </div>
//         </div>