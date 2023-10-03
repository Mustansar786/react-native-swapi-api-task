import {
  getRootData,
  getStarshipsDataUrl,
  getFilmsDataUrl,
} from "../../api/Endpoint";

import { axiosInstance as axios } from "../../api/axios";
import { RootActionTypes } from "../redux/actionTypes";

import { setCustomAlert } from "../alert/AlertActions";

export const getRootAPIData = () => {
  return (dispatch) => {
    dispatch({
      type: RootActionTypes.GET_ROOT_DATA_START,
    });
    const url = getRootData();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        console.log(data, "check response =================")
        if (data) {
          getRootDataSuccess(dispatch, data);
        } else {
          getRootDataFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getRootDataFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getRootDataFail = (dispatch, errorMessage) => {
  dispatch({
    type: RootActionTypes.GET_ROOT_DATA_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const getRootDataSuccess = (dispatch, data) => {
  dispatch({
    type: RootActionTypes.GET_ROOT_DATA_SUCCESS,
    payload: data,
  });
};




export const getFilmsData = () => {
  return (dispatch) => {
    dispatch({
      type: RootActionTypes.GET_FILMS_DATA_START,
    });
    const url = getFilmsDataUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        console.log(data, "check films response =================")
        if (data) {
          getFilmsDataSuccess(dispatch, data);
        } else {
          getFilmsDataFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getRootDataFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getFilmsDataFail = (dispatch, errorMessage) => {
  dispatch({
    type: RootActionTypes.GET_FILMS_DATA_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const getFilmsDataSuccess = (dispatch, data) => {
  dispatch({
    type: RootActionTypes.GET_FILMS_DATA_SUCCESS,
    payload: data,
  });
};

export const getStarshipsData = () => {
  return (dispatch) => {
    dispatch({
      type: RootActionTypes.GET_STARSHIPS_DATA_START,
    });
    const url = getStarshipsDataUrl();

    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        console.log(data, "check starships response =================")
        if (data) {
          getStarshipsDataSuccess(dispatch, data);
        } else {
          getStarshipsDataFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        getStarshipsDataFail(dispatch, error?.response?.data?.message);
      });
  };
};
const getStarshipsDataFail = (dispatch, errorMessage) => {
  dispatch({
    type: RootActionTypes.GET_STARSHIPS_DATA_FAIL,
    payload: {
      errorMessage,
    },
  });
  if (errorMessage) {
    dispatch(
      setCustomAlert({
        title: "Something Went Wrong",
        message: errorMessage,
        buttons: [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
        ],
        options: {},
        visibllity: true,
      }) as any
    );
  }
};
const getStarshipsDataSuccess = (dispatch, data) => {
  dispatch({
    type: RootActionTypes.GET_STARSHIPS_DATA_SUCCESS,
    payload: data,
  });
};

