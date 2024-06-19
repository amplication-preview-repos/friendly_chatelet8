import { Campaign } from "../campaign/Campaign";
import { Client } from "../client/Client";

export type Notification = {
  campaign?: Campaign | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  messageContent: string | null;
  status: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
