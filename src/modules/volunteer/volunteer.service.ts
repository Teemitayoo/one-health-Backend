import VolunteerRepository from './volunteer.repository';
import IVolunteer from './interface/volunteer.interface';
import { VolunteerDTO } from './volunteer.dto';
const volunteerRepository = new VolunteerRepository();

class VolunteerService {
  async createVolunteer({ firstName, lastName, email, contact, address, state, city, dateOfBirth, followed, occupation, institution, skills }: VolunteerDTO): Promise<Pick<IVolunteer, 'firstName'>> {
    const newVolunteer: Partial<IVolunteer> = { firstName, lastName, email, contact, address, state, city, dateOfBirth, occupation, institution, followed, skills };
    const createdVolunteer = await volunteerRepository.createVolunteer(newVolunteer as IVolunteer);
    return { firstName: createdVolunteer.firstName };
  }
}

export default VolunteerService;
