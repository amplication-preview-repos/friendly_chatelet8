import { NotificationUpdateManyWithoutCampaignsInput } from "./NotificationUpdateManyWithoutCampaignsInput";

export type CampaignUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutCampaignsInput;
  startDate?: Date | null;
  status?: string | null;
};
