import { Notification } from "../notification/Notification";

export type Campaign = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  notifications?: Array<Notification>;
  startDate: Date | null;
  status: string | null;
  updatedAt: Date;
};
