const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Insight = require('./models/Insight');

dotenv.config();

// Connect to the database
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(Database Connected: ${conn.connection.host});
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

// Read and parse JSON file
const importData = async () => {
    try {
        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

        await Insight.insertMany(data);
        console.log('Data Imported Successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error importing data:', error);
        process.exit(1);
    }
};

// Run the functions
const run = async () => {
    await connectDB();
    await importData();
};

run();