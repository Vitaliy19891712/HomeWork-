const initState = {
  themeId: 1,
};

type InitStateType = {
  themeId: number;
};

type ActionCreateType = ReturnType<typeof changeThemeId>;

export const themeReducer = (state = initState, action: ActionCreateType): InitStateType => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return { themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number) => ({ type: "SET_THEME_ID", id } as const); // fix any
