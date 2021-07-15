import { GET_TEXT } from "../actions/actions";

const InitialState = {
    texts: []
};

  export default function rootReducer(state = InitialState, action) {
    if (action.type === GET_TEXT) {
        return {
            ...state,
            texts: [action.payload, ...state.texts]
        }
    }

    return state;
  }