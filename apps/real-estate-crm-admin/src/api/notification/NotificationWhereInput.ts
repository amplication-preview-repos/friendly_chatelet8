import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  campaign?: CampaignWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  messageContent?: StringNullableFilter;
  status?: StringNullableFilter;
  typeField?: "Option1";
};
