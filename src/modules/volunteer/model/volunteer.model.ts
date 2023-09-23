import { Schema, model } from 'mongoose';
import IVolunteer from '../interface/volunteer.interface';

const volunteerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  skills: [{ type: String, required: true }],
  occupation: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
  },
  followed: {
    type: Boolean,
    default: false,
  },
});

export default model<IVolunteer>('Volunteer', volunteerSchema);
