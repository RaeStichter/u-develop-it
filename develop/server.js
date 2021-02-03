const express = require('express');
//const sqlite3 = require('sqlite3').verbose();// moved to database.js
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

// added for modularization
// by adding the /api prefix, we can remove it from the individual route expressions as they are moved out of this file
const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Connect to database - moved to database.js

// ROUTES WERE MOVED
// Get all candidates - moved to candidateRoutes.js
// Get single candidate - moved to candidateRoutes.js
// Delete a candidate - moved to candidateRoutes.js
// Create a candidate  - moved to candidateRoutes.js
// UPDATE CANDIDATES PARTY  - moved to candidateRoutes.js
// GET ALL PARTIES - moved to partyRoutes.js
// GET PARTY BY ID - moved to partyRoutes.js
// DELETE PARTY - moved to partyRoutes.js

// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
});