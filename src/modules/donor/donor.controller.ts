import { Request, Response } from 'express';
import DonorService from './donor.service';

const donorService = new DonorService();

class DonorController {
  async createDonor(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, contact, address, state, city, dateOfBirth, bloodGroup, genotype, lastDonation, followed, occupation, institution } = req.body;
      const createdDonor = await donorService.createDonor({ firstName, lastName, email, contact, address, state, city, dateOfBirth: new Date(dateOfBirth), bloodGroup, followed, genotype, lastDonation, occupation, institution });
      res.status(201).json({ success: true, createdDonor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while creating the donor.' });
    }
  }
}
export default DonorController;
