import {UPDATE,FILTER_HASH_TAG,ERROR} from '../constants';

export const filterHashTag = (obj) => ({
  type: FILTER_HASH_TAG,
  obj
});
export const getPhotoInsta = () => dispatch =>  {
    fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=3294255871.a18db21.c3cbd5d04d7f425492ff038775f721d6`) // выполняем запрос на получение фоток инсты
   .then(r=>r.json()) // переводим в json формат
   .then(r=>{
     let per = r.data.map(el=>{
        let per=Object.assign({}, el);
        per.images.size='small';
        return per;
     });
    dispatch({type:UPDATE , obj:per})
   })
   .catch(err=>{
     console.log("error",err);
     dispatch({type:ERROR , obj:err})
   });
}
// экшены заменяет в store размер фото с нужным id
export const changeSizePhoto = (id,state) => {
  return Object.assign({}, state).data.maindata.map(el=>{
    if (el.id===id) el.images.size==='small' ? el.images.size='big' : el.images.size='small';
    return el;
  });
};
