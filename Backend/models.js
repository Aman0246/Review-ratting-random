const mongoose=require("mongoose")
//userSchema
const userSchema = new mongoose.Schema({
   name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    city: {
        type: String
    },
    phone: {
        type: String
    },
    state: {
        type: String
    }
    // companyRattedbyUser:[{
    //     type: mongoose.Schema.ObjectId,
    //     ref:'company'
    // }]
});

const user = mongoose.model('user', userSchema);



//companySchema
const companySchema = new mongoose.Schema({
founded:{
    type:String
},
companyName:{
    type:String
},
companyAddress:{
    type:String
},
City:{
    type:String
},
ratting:{
    type:String,
    default:0
}
})

const company = mongoose.model('company', companySchema);

module.exports={user,company};