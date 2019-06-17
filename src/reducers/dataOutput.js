import { UPDATE,FILTER_HASH_TAG } from '../constants';

import dataJson from "../dataTest.json";

const INITIAL= {maindata:dataJson,
                filteredData:null};

const data = (state = INITIAL, { type, id, created_time, location, low_resolution,standard_resolution,thumbnail,obj }) => {
  let copyState= Object.assign({}, state);
  console.log("copyState",copyState)
  switch (type) {
    case FILTER_HASH_TAG :
      console.log("FILTER_HASH_TAG");
      copyState.filteredData = obj;
      return copyState;
    case UPDATE : // доделать!
      console.log("UPDATE");
      copyState.maindata = obj;
      return copyState;
    default:
      return state;
  }
}

export default data;
