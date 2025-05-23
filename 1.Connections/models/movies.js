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
  const UpdateById = async() => {
    try {
        // Update One
        // updateOne(filter, whatToChange)
        const result = await movie.updateOne({name : "Avengers Civil War"} , {ratings:4.5});
        console.log(result);
        
        
    }catch(error)
    {
        console.log("error");
        
    }
  }

export { UpdateById };