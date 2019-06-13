import {FILTER} from '../constants';

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

export const addTask = (id, created_time, location, low_resolution,standard_resolution,thumbnail) => ({
  type: ADD_TASK,
   id,
   created_time,
   location,
   low_resolution,
   standard_resolution,
   thumbnail
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  id
});

// export const addData = (data) => ({
//   type: ADD,
//   data,
// });
//
// export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS'
//
// function fetchAllItems(subreddit) {
//   return {
//     type: FETCH_ALL_ITEMS,
//     subreddit
//   }
// }
