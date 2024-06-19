import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CampaignTitle } from "../campaign/CampaignTitle";
import { ClientTitle } from "../client/ClientTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="campaign.id"
          reference="Campaign"
          label="Campaign"
        >
          <SelectInput optionText={CampaignTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="messageContent" multiline source="messageContent" />
        <TextInput label="status" source="status" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
