import mongoose from 'mongoose';

const postSchema= mongoose.Schema({
    title: String,
    message:String,
    creator:String,
    tags:[String],
    selectefile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        //default:new Data()
    },

});

var PostMessage= mongoose.model('PostMessage',postSchema);

export default PostMessage;