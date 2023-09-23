import { Request, Response } from 'express';
import VolunteerService from './volunteer.service';

const volunteerService = new VolunteerService();

class VolunteerController {
  async createVolunteer(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, contact, address, state, city, dateOfBirth, followed, occupation, institution, skills } = req.body;
      const createdVolunteer = await volunteerService.createVolunteer({ firstName, lastName, email, contact, address, state, city, dateOfBirth: new Date(dateOfBirth), followed, occupation, institution, skills });
      res.status(201).json({ success: true, createdVolunteer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while creating the volunteer.' });
    }
  }
}
export default VolunteerController;
