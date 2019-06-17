import {UPDATE,FILTER_HASH_TAG} from '../constants';

export const filterHashTag = (obj) => ({
  type: FILTER_HASH_TAG,
  obj
});
export const getPhotoInsta = () => dispatch =>  {
    fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=3294255871.a18db21.c3cbd5d04d7f425492ff038775f721d6`) // выполняем запрос на получение фоток инсты
   .then(r=>r.json()) // переводим в json формат
   .then(r=>{
    dispatch({type:UPDATE , obj:r})
   })
  //.catch(err=>console.log("error in request Instagram", err)); // ловим ошибки
}
