// import express from "express";
// import bodyParser from "body-parser";
// import { connectDB } from "./data/database.js";
// import {config} from "dotenv";
// import mongoose from "mongoose";

// config({
//     path: "./data/config.env",
// });

// const app = express();
// app.use(bodyParser.json());

// connectDB();
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });

// app.get("/", (req,res)=>{
//     res.send("Welcome to my app");
// });


// // POST route to add university, course, and deadline
// app.post('/add', (req, res) => {
//     const { universityName, courseName, deadline } = req.body;
  
//     // Validate the input
//     if (!universityName || !courseName || !deadline) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }
  
//     // Create a Mongoose model for the university collection
//     const Entries = mongoose.model('Entries', {
//       universityName: String,
//       courseName: String,
//       deadline: String,
//     });
  
//     // Create a new instance of the University model with the received data
//     const entry = new Entries({
//       universityName,
//       courseName,
//       deadline,
//     });
  
//     // Save the university data to the database
//     entry
//       .save()
//       .then(() => {
//         res.json({ message: 'Entry added successfully' });
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to add entry' });
//       });
//   });

// // GET route to retrieve all entries
// app.get('/entries', (req, res) => {
//   entry.find()
//     .then((entries) => {
//       res.json(entries);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to retrieve entries' });
//     });
// });


// **********************************************************************  //

// import express from 'express';
// import bodyParser from 'body-parser';
// import { connectDB } from './data/database.js';
// import { config } from 'dotenv';
// import mongoose from 'mongoose';

// config({
//   path: './data/config.env',
// });

// const app = express();
// app.use(bodyParser.json());

// connectDB();
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to my app');
// });

// // Define the Entries model
// const Entries = mongoose.model('Entries', {
//   universityName: String,
//   courseName: String,
//   deadline: String,
// });

// // POST route to add university, course, and deadline
// app.post('/add', (req, res) => {
//   const { universityName, courseName, deadline } = req.body;

//   // Validate the input
//   if (!universityName || !courseName || !deadline) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }

//   // Create a new instance of the Entries model with the received data
//   const entry = new Entries({
//     universityName,
//     courseName,
//     deadline,
//   });

//   // Save the entry data to the database
//   entry
//     .save()
//     .then(() => {
//       res.json({ message: 'Entry added successfully' });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to add entry' });
//     });
// });

// // GET route to retrieve all entries
// app.get('/entries', (req, res) => {
//   Entries.find()
//     .then((entries) => {
//       res.json(entries);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to retrieve entries' });
//     });
// });


// ************************************************************************* //

// import express from 'express';
// import bodyParser from 'body-parser';
// import { connectDB } from './data/database.js';
// import { config } from 'dotenv';
// import mongoose from 'mongoose';

// config({
//   path: './data/config.env',
// });

// const app = express();
// app.use(bodyParser.json());

// connectDB();
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to my app');
// });

// // Define the Entries model
// const Entries = mongoose.model('Entries', {
//   universityName: String,
//   courseName: String,
//   deadline: Date,
// });

// // POST route to add university, course, and deadline
// app.post('/add', (req, res) => {
//   const { universityName, courseName, deadline } = req.body;

//   // Validate the input
//   if (!universityName || !courseName || !deadline) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }

//   // Create a new instance of the Entries model with the received data
//   const entry = new Entries({
//     universityName,
//     courseName,
//     deadline,
//   });

//   // Save the entry data to the database
//   entry
//     .save()
//     .then(() => {
//       res.json({ message: 'Entry added successfully' });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to add entry' });
//     });
// });

// // GET route to retrieve all entries
// app.get('/entries', (req, res) => {
//   Entries.find()
//     .then((entries) => {
//       res.json(entries);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to retrieve entries' });
//     });
// });


// // GET route to retrieve entries with deadline smaller than a given date
// app.get('/entries/deadline/:date', (req, res) => {
//   const { date } = req.params;

//   // Validate the date format
//   const deadlineDate = new Date(date);
//   if (isNaN(deadlineDate)) {
//     return res.status(400).json({ error: 'Invalid date format' });
//   }

//   Entries.find({ deadline: { $lt: deadlineDate } })
//     .then((entries) => {
//       if (entries.length === 0) {
//         return res.json({ message: 'No entries found with deadline smaller than the provided date' });
//       }
//       res.json(entries);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to retrieve entries' });
//     });
// });


// ************************************************************************* //

// import express from 'express';
// import bodyParser from 'body-parser';
// import { connectDB } from './data/database.js';
// import { config } from 'dotenv';
// import mongoose from 'mongoose';

// config({
//   path: './data/config.env',
// });

// const app = express();
// app.use(bodyParser.json());

// connectDB();
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// // app.get('/', (req, res) => {
// //   res.send('Welcome to my app');
// // });

// // Define the Entries model
// const Entries = mongoose.model('Entries', {
//   universityName: String,
//   courseName: String,
//   deadline: String, // Update the type to String
// });

// // POST route to add university, course, and deadline
// app.post('/add', (req, res) => {
//   const { universityName, courseName, deadline } = req.body;

//   // Validate the input
//   if (!universityName || !courseName || !deadline) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }

//   // Create a new instance of the Entries model with the received data
//   const entry = new Entries({
//     universityName,
//     courseName,
//     deadline,
//   });

//   // Save the entry data to the database
//   entry
//     .save()
//     .then(() => {
//       res.json({ message: 'Entry added successfully' });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to add entry' });
//     });
// });

// // GET route to retrieve all entries
// app.get('/entries', (req, res) => {
//   Entries.find()
//     .then((entries) => {
//       res.json(entries);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to retrieve entries' });
//     });
// });


// // GET route to retrieve entries with deadline smaller than a given date
// app.get('/entries/deadline/:date', (req, res) => {
//   const { date } = req.params;

//   // Validate the date format
//   const deadlineDate = new Date(date);
//   if (isNaN(deadlineDate)) {
//     return res.status(400).json({ error: 'Invalid date format' });
//   }

//   Entries.find({ deadline: { $lt: date } }) // Updated query to compare as string
//     .then((entries) => {
//       if (entries.length === 0) {
//         return res.json({ message: 'No entries found with deadline smaller than the provided date' });
//       }
//       res.json(entries);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to retrieve entries' });
//     });
// });

// *********************************************************************************** //

import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './data/database.js';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

config({
  path: './data/config.env',
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

const Entries = mongoose.model('Entries', {
  universityName: String,
  courseName: String,
  deadline: String,
});

app.post('/add', (req, res) => {
  const { universityName, courseName, deadline } = req.body;

  if (!universityName || !courseName || !deadline) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const entry = new Entries({
    universityName,
    courseName,
    deadline,
  });

  entry
    .save()
    .then(() => {
      res.json({ message: 'Entry added successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to add entry' });
    });
});

app.get('/entries', (req, res) => {
  Entries.find()
    .then((entries) => {
      res.json(entries);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve entries' });
    });
});

app.get('/entries/deadline/:date', (req, res) => {
  const { date } = req.params;

  const deadlineDate = new Date(date);
  if (isNaN(deadlineDate)) {
    return res.status(400).json({ error: 'Invalid date format' });
  }

  Entries.find({ deadline: { $lt: date } })
    .then((entries) => {
      if (entries.length === 0) {
        return res.json({ message: 'No entries found with deadline smaller than the provided date' });
      }
      res.json(entries);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve entries' });
    });
});


