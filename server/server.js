const express = require('express'); 
const mongoose = require('mongoose');
const students = require('./models');
const cors = require('cors');
const app = express();
app.use(express.json())
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both origins
    credentials: true,
  };
  
app.use(cors(corsOptions));

mongoose.connect("mongodb://localhost:27017/school")

app.listen(3001, () => {
    console.log("Server is running")
  });
  

  app.post('/poststudentdetails', async (req, res) => {
    const student = new students(req.body);
    try {
      await student.save();
      res.status(201).send(student);                                                  //register//
  
    } catch (error) {
      res.status(400).send(error);
    }
  })

  app.post('/logindet', (req, res) => {
    const { email, password } = req.body; 
  
    students.findOne({email:email})
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: "Student does not exist" });
        }
  
        if (user.password === password && user.role === "admin") {
        //   req.session.user = { email: user.email, status: user.status };//
          return res.status(200).json({ message: true, user: user.role });
        }
  
        if (user.password === password && user.role === "student") {
        //   req.session.user = { email: user.email, status: user.status };//
          return res.status(200).json({ message: true, user: user.role, });
        }
        // if (user.password === password && user.role === "staff") {
        // //   req.session.user = { email: user.email, status: user.status };//
        //   return res.status(200).json({ message: true, user: user.role,  });
        // }
        else {
          return res.status(401).json({ message: "Incorrect username or password" }); 
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        return res.status(500).json({ message: "Internal server error" });
      });
  });
  

  app.get("/viewstudentdetails", async (req, res) => {
  
    try {
      const users = await students.find({role:"student"});                                 //ADMIN VIEW STUDENTS
      res.json(users);                                                     //-------------------//
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
   
  
  })



//to get particular data //
  
app.get("/getstudentdetail/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extracting student ID from request parameters
    const student = await students.findOne({_id:id});

    if (student) {
      res.json(student); // Return the student details if found
    } else {
      res.status(404).json({ message: "Student not found" }); // Handle case where student isn't found
    }
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle server errors
  }
});


app.patch('/updatestudentdetail/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body; // Fields to update

    const updatestudent = await students.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true // Ensure the update passes validation rules
    });

    if (updatestudent) {
      res.json(updatestudent); // Return the updated student details
    } else {
      res.status(404).json({ message: "User not found" }); // Handle case where user isn't found
    }
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle validation errors
  }
});
app.delete('/deletestudentdetails/:id', (req, res) => {
  const id = req.params.id;

  students.findByIdAndDelete({ _id: id }) // ✅ Correct usage
    .then((deletedStudent) => {
      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json({ message: "Student deleted successfully", student: deletedStudent });
    })
    .catch((err) => {
      res.status(500).json({ error: "Error deleting student", details: err.message });
    });
});

