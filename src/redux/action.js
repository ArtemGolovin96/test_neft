export function getCurrencyAction() {
  return {
    type: "DID_MOUNT_GET_CURR",
  };
}

export function onChangeInputIhaveAction(text) {
  return {
    type: "ONCHANGE_INPUT_IHAVE",
    payload: {
      text,
    },
  };
}

export function onChangeInputIWantAction(text) {
  return {
    type: "ONCHANGE_INPUT_IWANT",
    payload: {
      text,
    },
  };
}
