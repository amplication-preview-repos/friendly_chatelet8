import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMPAIGN_TITLE_FIELD } from "./CampaignTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const CampaignShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="startDate" source="startDate" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Notification"
          target="campaignId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Campaign"
              source="campaign.id"
              reference="Campaign"
            >
              <TextField source={CAMPAIGN_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="messageContent" source="messageContent" />
            <TextField label="status" source="status" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
