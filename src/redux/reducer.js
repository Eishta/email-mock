import {
  GET_ALL_EMAILS,
  GET_EMAIL_DETAIL_BY_ID,
  SELECT_EMAIL
} from "./actionTypes";

let initState = {
  emails: [],
  emailDetail: {},
  selectedEmail: {}
};
let reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_EMAILS:
      return { ...state, emails: [...action.data] };
    case GET_EMAIL_DETAIL_BY_ID: {
      return {
        ...state,
        emailDetail: { ...state.emailDetail, [action.id]: action.detail }
      };
    }
    case SELECT_EMAIL:
      return { ...state, selectedEmail: action.email };
    default:
      return state;
  }
};
export default reducer;
