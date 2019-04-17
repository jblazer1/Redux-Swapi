import {
  /* we need our action types here*/ FETCHING,
  SUCCESS,
  FAILURE
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        characters: action.payload
      };
    case FAILURE:
    default:
      return state;
  }
};
