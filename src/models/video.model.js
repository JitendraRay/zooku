import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
 
const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type:String,
            required:[true,'this field can not be empty']
        },
        thumbnail:{
            type:String,

        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:User
        },
        title:{
            type:String,
            required:true,

        },
        description:{
            type:String
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number
        },
        isPublished:{
            type:Boolean,
            default:true
        },
    },
    {
        timestamps:true
    }
)

// for writing aggregate queries use mongoose-aggregate-paginate-v2

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)