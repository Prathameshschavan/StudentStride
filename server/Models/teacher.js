import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

const Teacher = mongoose.model('teacher', teacherSchema);

export default Teacher;