export function onChangeInputIhaveAction(text) {
  return {
    type: "ONCHANGE_INPUT_IHAVE",
    payload: {
      text,
    },
  };
}
