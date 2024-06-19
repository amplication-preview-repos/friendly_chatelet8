import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NotificationTitle } from "../notification/NotificationTitle";

export const CampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
