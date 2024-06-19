import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { NotificationUpdateManyWithoutClientsInput } from "./NotificationUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutClientsInput;
  phoneNumber?: string | null;
};
