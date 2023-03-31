import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: String, required: true },
        gurdian: { type: String, required: true },
        mobile: { type: String, required: true },
        date_of_birth: { type: String, required: true },
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model('school', studentSchema);

export default Student;