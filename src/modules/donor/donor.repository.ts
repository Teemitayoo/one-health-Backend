import donorModel from './model/donor.model';
import IDonor from './interface/donor.interface';
import { FilterQuery } from 'mongoose';

class DonorRepository {
  async getAllDonors(): Promise<IDonor[]> {
    return await donorModel.find();
  }

  async getDonorById(id: string): Promise<IDonor | null> {
    return await donorModel.findById(id);
  }

  async getDonor(param: FilterQuery<IDonor>): Promise<IDonor | null> {
    return await donorModel.findOne(param);
  }

  async createDonor(Donor: IDonor): Promise<IDonor> {
    const newDonor = await donorModel.create(Donor);
    return newDonor.toObject();
  }

  async updateDonor(id: string, updatedDonor: IDonor): Promise<IDonor | null> {
    return await donorModel.findByIdAndUpdate(id, updatedDonor, { new: true });
  }

  async deleteDonor(id: string): Promise<IDonor | null> {
    return await donorModel.findByIdAndDelete(id);
  }
}

export default DonorRepository;
