import volunteerModel from './model/volunteer.model';
import IVolunteer from './interface/volunteer.interface';
import { FilterQuery } from 'mongoose';

class VolunteerRepository {
  async getAllVolunteers(): Promise<IVolunteer[]> {
    return await volunteerModel.find();
  }

  async getVolunteerById(id: string): Promise<IVolunteer | null> {
    return await volunteerModel.findById(id);
  }

  async getVolunteer(param: FilterQuery<IVolunteer>): Promise<IVolunteer | null> {
    return await volunteerModel.findOne(param);
  }

  async createVolunteer(Volunteer: IVolunteer): Promise<IVolunteer> {
    const newVolunteer = await volunteerModel.create(Volunteer);
    return newVolunteer.toObject();
  }

  async updateVolunteer(id: string, updatedVolunteer: IVolunteer): Promise<IVolunteer | null> {
    return await volunteerModel.findByIdAndUpdate(id, updatedVolunteer, { new: true });
  }

  async deleteVolunteer(id: string): Promise<IVolunteer | null> {
    return await volunteerModel.findByIdAndDelete(id);
  }
}

export default VolunteerRepository;
