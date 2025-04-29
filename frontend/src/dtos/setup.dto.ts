import type { Group } from "@/models/users/group.model";

export type SetupDto = {
  accountPhase: AccountPhase;
  groupsPhase: GroupsPhase
};

export type AccountPhase = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
};

export type GroupsPhase = {
  groups: Group[];  
};
