
import mongoose from 'mongoose';

const classSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        students: [],
        teachers: []
    },
    {
        timestamps: true
    }
)

const Class = mongoose.model('class', classSchema);

export default Class;