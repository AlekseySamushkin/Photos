import { FILTER,ADD } from '../constants';
import store from '../store.js';
import { createStore, compose } from 'redux';
import dataJson from "../dataTest.json";
// константы
const ADD_TASK='ADD_TASK';
const REMOVE_TASK='REMOVE_TASK';
const COMPLETE_TASK='COMPLETE_TASK';

const INITIAL= dataJson;

// по примеру из видео
// КОД пока несвязан с проектом!
const data = (state = INITIAL, { type, id, created_time, location, low_resolution,standard_resolution,thumbnail }) => {
  let copyState= Object.assign({}, state);
  switch (type) {
    case ADD_TASK :
      console.log("ADD_TASK");
      copyState.data = [ ...copyState.data, {
          id,
          created_time,
          location,
          images:{
            low_resolution,
            standard_resolution,
            thumbnail,
          }
        }
      ]
      return copyState;
    case REMOVE_TASK :
      console.log("REMOVE_TASK");
      copyState.data = [ ...copyState.data.filter(task=>task.id !== id)];
      return copyState; //возвращаем стейт без задачи
    case COMPLETE_TASK :
      console.log("COMPLETE_TASK")
      copyState.data = [...copyState.data].map(task=>{
        if(task.id === id) {
          task.isCompleted = !task.isCompleted
        }
        return task;
      });
    default:
      return state;
  }
}

export default data;
