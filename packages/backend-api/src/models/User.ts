import mongoose from 'mongoose';

interface IUser {
  _id: number;
  name: string;
  photoUrl: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    photoUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);
export default User;
