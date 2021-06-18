/* eslint-disable no-fallthrough */
import store from "./store";

const globalState = {
  from: "RUB",
  to: "USD",
};

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "ONCHANGE_INPUT_IHAVE":
      console.log(action.payload);

    default:
      return state;
  }
  return globalState;
}
