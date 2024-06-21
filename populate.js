require('dotenv').config();

const connectDB=require('./config/db');

const jsonProducts=require('./product.json');
const Product=require('./models/Data')

const start=async()=>{
    try {
        await connectDB()
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('success')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start();