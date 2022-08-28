let express = require('express');
let app = express();
let cors = require('cors');
let mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());

const gropuRoute = require('./routes/groups');

const connectDB = (pass) => {
  return mongoose.connect(
    'mongodb+srv://Veljko:' +
      pass +
      '@cluster0.vsesy.mongodb.net/Inventory?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

app.use('/api/groups', gropuRoute);

const PORT = 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_PASS);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
