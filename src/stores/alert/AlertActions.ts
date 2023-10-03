import { RootActionTypes } from "../redux/actionTypes";

export const setCustomAlert = (customAlertData) => {
  return (dispatch) => {
    dispatch({
      type: RootActionTypes.SET_CUSTOM_ALERT,
      payload: customAlertData,
    });
  };
};
