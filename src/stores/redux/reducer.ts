import { combineReducers } from "redux";

import root from "../root/RootReducers";

const Sooq = combineReducers({
  auth: root,
});

export default Sooq;
