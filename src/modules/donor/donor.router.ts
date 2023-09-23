// donor.router.ts
import { Router } from 'express';
import DonorController from './donor.controller';

export const router = Router();
const donorController = new DonorController();

// Define the route to create a donor
router.post('/createDonor', donorController.createDonor);

export default router;
