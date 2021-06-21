export function getCurrAction() {
  return (dispatch) => {
    fetch("https://www.cbr-xml-daily.ru/latest.js")
      .then((res) => res.json())
      .then((data) => dispatch(getCurrencyAction(data.rates)))
      .catch((err) => dispatch(getCurrencyERRAction(err)));
  };
}

export function getCurrencyAction(data) {
  return {
    type: "DID_MOUNT_GET_CURR",
    payload: {
      data,
    },
  };
}

export function getCurrencyERRAction(err) {
  return {
    type: "DID_MOUNT_GET_CURR_ERR",
    payload: {
      err,
    },
  };
}

export function onChangeInputIhaveAction(e, value) {
  e.preventDefault();
  return {
    type: "ONCHANGE_INPUT_IHAVE",
    payload: {
      value,
    },
  };
}

export function onChangeInputIWantAction(e, text) {
  e.preventDefault();
  return {
    type: "ONCHANGE_INPUT_IWANT",
    payload: {
      text,
    },
  };
}

export function onChangeButtonAction(curr) {
  return {
    type: "ON_CHANGE_CURR_FROM_BUTTON",
    payload: {
      curr,
    },
  };
}

export function changeValueAction() {
  return {
    type: "GET_VALUE",
  };
}
