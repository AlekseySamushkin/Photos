import { UPDATE,FILTER_HASH_TAG } from '../constants';

import dataJson from "../dataTest.json";

const INITIAL= {maindata:null,
                filteredData:null};

const data = (state = INITIAL, { type,obj }) => {
  let copyState= Object.assign({}, state);
  switch (type) {
    case FILTER_HASH_TAG :
      copyState.filteredData = obj;
      return copyState;
    case UPDATE :
      copyState.maindata = obj;
      return copyState;
    default:
      return state;
  }
}

export default data;
