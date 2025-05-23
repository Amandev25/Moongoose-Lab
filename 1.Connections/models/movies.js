import mongoose from "mongoose";
/// Define the Schema:
const movieSchema = new mongoose.Schema({
    name : {type:String , required:true , trim : true},
    ratings: {type: Number, required :true , min:1, max:5 },
    money : {
        type: mongoose.Decimal128,
        required:true,
        validate: v => v >= 10
    },
    genre :  {type:Array},
    isActive : {type:Boolean},
    Comments: [{value:{type:String} , published: {type:Date , default:Date.now}}]
})
// defining the model
const movie  = mongoose.model("Movie" ,movieSchema);
 // Creating a document
  const createDoc = async() => {
    try {
        // Cfeating new Document
        const m1 = new movie({
            name : "Avengers Endgame",
            ratings: 4,
            money:600000,
            genre: ['action' , 'Sci-FI'],
            isActive: true,
            Comments: [{value : "That was an amazing movie!!"}]

        })
        const m2 = new movie({
            name : "Avengers Infinity War",
            ratings: 4.9,
            money:900000,
            genre: ['action' , 'Sci-FI'],
            isActive: true,
            Comments: [{value : "That was an amazing movie!!"}]

        })
        const m3 = new movie({
            name : "Avengers Civil War",
            ratings: 3.8,
            money:890000,
            genre: ['action' , 'Sci-FI'],
            isActive: true,
            Comments: [{value : "That was an amazing movie!!"}]

        })
        const m4 = new movie({
            name : "Avengers : Age of Ultron",
            ratings: 5,
            money:560000,
            genre: ['action' , 'Sci-FI'],
            isActive: true,
            Comments: [{value : "That was an amazing movie!!"}]

        })
        // Saving the document
        const result = await movie.insertMany([m1,m2,m3,m4]);
        console.log(result);
    }catch(error)
    {
        console.log("error");
        
    }
  }

export { createDoc };