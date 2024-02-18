const mongoose = require('mongoose');
// const studentModel = require("./model/student.model");
const studentModel = require("./model/student.model1");

/**
 * Write the code to connect with MongoDB
 */
// mongoose.connect("url");
// mongoose.connect("mongodb://localhost/be_demodb");
mongoose.connect("mongodb://127.0.0.1/be_demodb");  // Where to connect

const db = mongoose.connection; // Start the connection with MongoDb

db.on("error", () => {
    console.log("Error while connectint to MongoDB");
});

db.on("open", () => {
    console.log("Connected to MongoDB");

    // Logic to insert data into the DB
    // init();

    // Running to queries on MongoDB
    dbQueries();

    // Delete Queries
    // del();

    // Update Queries
    // update();
});


async function init() {
    // Logic to insert data into the DB
    /*
    const student = {
        name: "Bharat",
        age: 21
    };

    const std_obj = await studentModel.create(student);
    console.log(std_obj);
    */

    const student = {
        name: "Deepak",
        age: 24, 
        email: "deepak@gmail.com",
        subjects: ["Maths", "Physics"]
    };

    try {
        const std_obj = await studentModel.create(student);
        console.log(std_obj);
    } catch (err) {
        console.log(err);
    }
}


async function dbQueries() {
    // Logic to read the student data
    console.log("Inside the dbQueries function");

    // Read the student data based on id    
    try{
        console.log("Reading by using id");
        const student = await studentModel.findById("65d1c84c0ceb35b4c15e640a");
        console.log(student);
    }catch(err){
        console.log(err);
    }  
    
    // Read the student data based on name    
    try {
        console.log("Reading by using name");
        // const students = await studentModel.find({name: "Bharat"});
        const students = await studentModel.findOne({name: "Bharat"});
        // const students = await studentModel.find({});    // acts like a findAll()
        console.log(students);
    }  catch(err) {
        console.log(err);
    }
    

    // Read the student data based on email    
    try {
        console.log("Reading by using email");
        const students = await studentModel.find({email: "bharat@gmail.com"});
        console.log(students);
    }  catch(err) {
        console.log(err);
    }
    
    /**
     * Deal with the multiple conditions
     */
    try {
        console.log("Reading by using age is greater than 10, name is Bharat and only 2 records/documents");        
        const students = await studentModel.where("age").gt("10").where("name").equals("Bharat").limit(2);
        console.log(students);
    }  catch(err) {
        console.log(err);
    }
}
    

async function del() {
    // Delete one document where name = "Bharat"
    try {
        const student = await studentModel.deleteOne({ name: "Raj" });
        console.log(student);
    } catch (err) {
        console.log(err);
    }
}


async function update() {
    // Logic to update data of the DB
    console.log("Updating data");

    try {
        const students = await studentModel.updateOne({ name: 'Deepak' }, { $set: { name: 'Raj' } }, { upsert: true });
        console.log(students);
    } catch (err) {
        console.log(err);
    }
}