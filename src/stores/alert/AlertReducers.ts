import { RootActionTypes } from "../redux/actionTypes";
import { AlertState } from "../redux/state";

const INITIAL_STATE: AlertState = {
  customAlertData: {
    visibllity: false,
  },
};
interface Action {
  payload: any;
  type: string;
}
const AlertReducer = (
  state: AlertState = INITIAL_STATE,
  action: Action
): AlertState => {
  switch (action.type) {
   
    case RootActionTypes.SET_CUSTOM_ALERT: {
      return {
        ...state,
        customAlertData: action?.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AlertReducer;
