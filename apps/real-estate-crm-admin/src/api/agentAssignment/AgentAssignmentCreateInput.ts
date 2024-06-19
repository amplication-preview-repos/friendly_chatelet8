import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agent?: string | null;
  assignedDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
