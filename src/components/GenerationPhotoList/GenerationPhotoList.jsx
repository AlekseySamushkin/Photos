import React from "react";
import RecipeReviewCard from "../border/border";
import {connect} from 'react-redux';
import {changeSizePhoto} from '../../actions/action';
import {UPDATE} from '../../constants';
/*
Данные Store, которые использует компонент:
1. state
Экшены, которые вызываются в этом компоненте:
1. changeSizePhoto (CHANGESIZEPHOTO)
В компонент пробрасывается отфильтрованный, либо не отфильтрованный варианты фотографий
*/
const GenerationPhotoList = (props) => {
       const result =props.photos.map(item => {
        return <li key={item.id} onClick={()=>props.changeSizePhoto(item.id,props.state)}>
          <RecipeReviewCard
            alt={item.id} created_time={item.created_time}
            full_name={item.full_name} users_in_photo={item.users_in_photo}
            profile_picture={item.user.profile_picture} size={item.images.size}
            src={item.images.size === 'small' ? item.images.low_resolution.url: item.images.standard_resolution.url }
            location={item.location}
          />
        </li>})
      // создаем элементы списка. Как ключ используем id каждой фотографии
      return (
        <div className="photosContainer">
          <h2>Фотографии из Instagram</h2>
          <ul>{result}</ul>
        </div>
      )// выводим получившийся список

}

export default connect( // переделать контент
  state=>({state}),
  dispatch=>({
     changeSizePhoto: (id,state)=> dispatch({type: UPDATE,obj:changeSizePhoto(id,state)}),
  })
)(GenerationPhotoList);
