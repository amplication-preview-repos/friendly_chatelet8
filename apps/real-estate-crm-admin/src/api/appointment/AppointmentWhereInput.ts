import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
  time?: DateTimeNullableFilter;
};
