let express = require('express');
let app = express();
let cors = require('cors');
let mongoose = require('mongoose');
require('dotenv').config();

const gropuRoutes = require('./routes/groups');
const itemRoutes = require('./routes/items');
const authRoutes = require('./routes/auth');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');
const { copyFile } = require('fs/promises');

app.use(cors());
app.use(express.json());
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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/groups', gropuRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);

const PORT = 8000;

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
