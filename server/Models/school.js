import mongoose from 'mongoose';

const schoolSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        UDISE_no: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        secret_key: { type: String },
        class: { type: [] }
    },
    {
        timestamps: true
    }
)

const School = mongoose.model('school', schoolSchema);

export default School;