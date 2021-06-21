/* eslint-disable no-fallthrough */
import store from "./store";

const globalState = {
  selectedCurr: "USD",
  allCurrObj: {},
  selectedCurrValue: 0,
  inputRub: "",
  result: 0,
};

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "DID_MOUNT_GET_CURR":
      console.log(action.payload.data);
      return { ...state, allCurrObj: action.payload.data };

    case "ONCHANGE_INPUT_IHAVE":
      if (!isNaN(+action.payload.value)) {
        return { ...state, result: +action.payload.value };
      }
      alert("Пожалуйста введите число!");

    case "ONCHANGE_INPUT_IWANT":
      console.log(action.payload);

    case "GET_CUR":
      console.log(action.payload);

    case "ON_CHANGE_CURR_FROM_BUTTON":
      return { ...state, selectedCurr: action.payload.curr };

    case "GET_VALUE":
      let imCurrObj = { ...state.allCurrObj };
      for (let key in imCurrObj) {
        if (key === state.selectedCurr) {
          return {
            ...state,
            selectedCurrValue: imCurrObj[key],
          };
        }
      }

    default:
      return state;
  }
}
