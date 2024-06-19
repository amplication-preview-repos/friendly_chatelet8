import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agent?: string | null;
  assignedDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
