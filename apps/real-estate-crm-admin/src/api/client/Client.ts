import { Appointment } from "../appointment/Appointment";
import { Notification } from "../notification/Notification";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  phoneNumber: string | null;
  updatedAt: Date;
};
