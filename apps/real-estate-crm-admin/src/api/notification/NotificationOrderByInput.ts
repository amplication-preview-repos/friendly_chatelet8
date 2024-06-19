import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  campaignId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messageContent?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
