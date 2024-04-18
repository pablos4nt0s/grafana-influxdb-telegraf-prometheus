import mongoose from 'mongoose';
import './User';

interface IFeedback {
  text: string;
  reviewee_id: mongoose.Schema.Types.Number;
  reviewer_id: mongoose.Schema.Types.Number;
}

const feedbackSchema = new mongoose.Schema<IFeedback>(
  {
    text: { type: String, required: true },
    reviewee_id: { type: Number, ref: 'User', required: true },
    reviewer_id: { type: Number, ref: 'User', required: true },
  },
  { timestamps: true }
);

const Feedback = mongoose.model<IFeedback>('Feedback', feedbackSchema);
export default Feedback;
