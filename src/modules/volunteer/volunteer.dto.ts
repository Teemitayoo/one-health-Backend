export interface VolunteerDTO {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
  state: string;
  city: string;
  dateOfBirth: Date;
  occupation: string;
  followed: boolean;
  institution?: string;
  skills: string[];
}
