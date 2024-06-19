import { NotificationCreateNestedManyWithoutCampaignsInput } from "./NotificationCreateNestedManyWithoutCampaignsInput";

export type CampaignCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutCampaignsInput;
  startDate?: Date | null;
  status?: string | null;
};
