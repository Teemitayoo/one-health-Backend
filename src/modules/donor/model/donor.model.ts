import { Schema, model } from 'mongoose';
import IDonor from '../interface/donor.interface';

const donorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', null],
    required: true,
  },
  genotype: {
    type: String,
    enum: ['AA', 'AS', 'SS', 'AC', 'SC', null],
    required: true,
  },
  lastDonation: {
    type: String,
    required: true,
  },
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

export default model<IDonor>('Donor', donorSchema);
