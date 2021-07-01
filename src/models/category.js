import {Schema, model} from 'mongoose';

const categorySchema = new Schema({
	"name": String,
    "description": String,
	
},{
    versionKey: false
});

export default model('Category', categorySchema);