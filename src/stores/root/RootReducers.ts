import { RootActionTypes } from "../redux/actionTypes";
import { RootState } from "../redux/state";

const INITIAL_STATE: RootState = {
  rootData: {},
  filmsData: {},
  starshipsData: {},
  rootDataLoading: false,
  filmsDataLoading: false,
  starshipsDataLoading: false,
};
interface Action {
  payload: any;
  type: string;
}
const RootReducer = (
  state: RootState = INITIAL_STATE,
  action: Action
): RootState => {
  switch (action.type) {
  
    case RootActionTypes.GET_ROOT_DATA_START: {
      return { ...state, rootDataLoading: true };
    }
    case RootActionTypes.GET_ROOT_DATA_SUCCESS: {
      return {
        ...state,
        rootData: action?.payload,
        rootDataLoading: false,
      };
    }
    case RootActionTypes.GET_ROOT_DATA_FAIL: {
      return {
        ...state,
        rootDataLoading: false,
      };
    }

    case RootActionTypes.GET_FILMS_DATA_START: {
      return { ...state, filmsDataLoading: true };
    }
    case RootActionTypes.GET_FILMS_DATA_SUCCESS: {
      let sortedArray = action?.payload?.results;
        sortedArray = sortedArray?.sort((a:any, b: any) => { 
            return new Date(b.release_date) - new Date(a.release_date) ; 
        });
      return {
        ...state,
        filmsData: sortedArray,
        filmsDataLoading: false,
      };
    }
    case RootActionTypes.GET_FILMS_DATA_FAIL: {
      return {
        ...state,
        filmsDataLoading: false,
      };
    }

    case RootActionTypes.GET_STARSHIPS_DATA_START: {
      return { ...state, starshipsDataLoading: true };
    }
    case RootActionTypes.GET_STARSHIPS_DATA_SUCCESS: {
      let sortedArray = action?.payload?.results;
        sortedArray = sortedArray?.sort((a:any, b: any) => { 
            return Number(a.length) - Number(b.length) ; 
        });
      return {
        ...state,
        starshipsData: sortedArray,
        starshipsDataLoading: false,
      };
    }
    case RootActionTypes.GET_STARSHIPS_DATA_FAIL: {
      return {
        ...state,
        starshipsDataLoading: false,
      };
    }
   
    default: {
      return state;
    }
  }
};

export default RootReducer;
