import DonorRepository from './donor.repository';
import IDonor from './interface/donor.interface';
import { DonorDTO } from './donor.dto';
const donorRepository = new DonorRepository();

class DonorService {
  async createDonor({ firstName, lastName, email, contact, address, state, city, dateOfBirth, bloodGroup, genotype, lastDonation, followed, occupation, institution }: DonorDTO): Promise<Pick<IDonor, 'firstName'>> {
    const newDonor: Partial<IDonor> = { firstName, lastName, email, contact, address, state, city, dateOfBirth, bloodGroup, genotype, lastDonation, followed, occupation, institution };
    const createdDonor = await donorRepository.createDonor(newDonor as IDonor);
    return { firstName: createdDonor.firstName };
  }
}

export default DonorService;
