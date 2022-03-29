const initialState = {
  branchs: [],
  branch: {},
};

const branchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BRANCHS":
      return {
        ...state,
        branchs: action.payload,
      };
    case "CREATE_BRANCHS":
      return {
        ...state,
        branch: action.payload,
      };
    case "UPDATE_BRANCHS":
      return {
        ...state,
        branch: action.payload,
      };
    default:
      return state;
  }
};

export default branchReducer;
