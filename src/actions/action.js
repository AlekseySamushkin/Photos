import {UPDATE,ADD_TASK,FILTER_HASH_TAG} from '../constants';

export const addTask = (id, created_time, location, low_resolution,standard_resolution,thumbnail) => ({
  type: ADD_TASK,
   id,
   created_time,
   location,
   low_resolution,
   standard_resolution,
   thumbnail
});

export const filterHashTag = (obj) => ({
  type: FILTER_HASH_TAG,
  obj
});
export const filterHashTag = (obj) => ({
  type: UPDATE,
  obj
});
