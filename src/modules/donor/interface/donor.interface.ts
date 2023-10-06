import { Document } from 'mongoose';

export default interface IDonor extends Document {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
  state: string;
  city: string;
  dateOfBirth: Date;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'idk';
  genotype: 'AA' | 'AS' | 'idk';
  lastDonation: string;
  followed: boolean;
  occupation: string;
  institution?: string;
}
