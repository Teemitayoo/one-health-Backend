// volunteer.router.ts
import { Router } from 'express';
import VolunteerController from './volunteer.controller';

export const router = Router();
const volunteerController = new VolunteerController();

// Define the route to create a volunteer
router.post('/createVolunteer', volunteerController.createVolunteer);

export default router;
