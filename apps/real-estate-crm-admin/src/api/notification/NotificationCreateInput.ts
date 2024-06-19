import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type NotificationCreateInput = {
  campaign?: CampaignWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  messageContent?: string | null;
  status?: string | null;
  typeField?: "Option1" | null;
};
