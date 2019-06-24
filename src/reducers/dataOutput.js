import { UPDATE,FILTER_HASH_TAG,ERROR,DELETE,CHANGESIZEPHOTO } from '../constants';

//import dataJson from "../dataTest.json";

const INITIAL=
{
  maindata:null,
  filteredData:null,
  error:null,
};

const data = (state = INITIAL, { type,obj }) => {
  let copyState= Object.assign({}, state);
  switch (type) {
    case FILTER_HASH_TAG :
      copyState.filteredData = obj;
      return copyState;
    case UPDATE :
      copyState.maindata = obj;
      return copyState;
    case CHANGESIZEPHOTO :
      copyState.maindata = obj;
      return copyState;
    case ERROR :
      copyState.error = obj;
      return copyState;
    case DELETE :
      copyState.maindata = null;
      copyState.sizeOfPhotos = null;
      return copyState;
    default:
      return state;
  }
}

export default data;
