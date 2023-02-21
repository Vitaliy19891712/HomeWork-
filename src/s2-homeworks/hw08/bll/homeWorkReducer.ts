import { UserType } from "../HW8";

type SortActoinType = {
  type: "sort";
  payload: "up" | "down";
};

type ChechActoinType = {
  type: "check";
  payload: number;
};

type ActionType = SortActoinType | ChechActoinType;

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any

  switch (action.type) {
    case "sort": {
      // by name
      if (action.payload === "up") {
        return [...state].sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return [...state].sort((a, b) => b.name.localeCompare(a.name));
      }

      // need to fix
    }
    case "check": {
      return [...state].filter((el) => el.age >= 18); // need to fix
    }
    default:
      return state;
  }
};
