import { UPDATE,FILTER_HASH_TAG,ERROR,DELETE } from '../constants';

//import dataJson from "../dataTest.json";

const INITIAL= // начальное значение стора
{
  maindata:null,
  filteredData:null,
  error:null,
};

const data = (state = INITIAL, { type,obj }) => { // пробрасываем значение стора и экшен в деструктуризированном виде.
  let copyState= Object.assign({}, state); // делаем копию, чтобы избежать мутации.
  switch (type) {
    case FILTER_HASH_TAG :
      copyState.filteredData = obj;
      return copyState;
    case UPDATE :
      copyState.maindata = obj;
      return copyState;
    case ERROR :
      copyState.error = obj;
      return copyState;
    case DELETE :
      copyState.maindata = null;
      copyState.filteredData = null;
      copyState.error = null;
      return copyState;
    default:
      return state;
  }
}

export default data;
