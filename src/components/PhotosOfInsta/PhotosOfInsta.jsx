import  "../../App.css";
import Button from '@material-ui/core/Button';
import React from "react";
import FilterHashTag from "../FilterHashTag/FilterHashTag";
import {connect} from 'react-redux';
import {DELETE} from '../../constants';
import {getPhotoInsta} from '../../actions/action';

/*
Если часто отправлять запросы, то вылетает ошибка 503

Данные Store, которые использует компонент:
1.state.data.maindata
2. state.data.error
Экшены, которые вызываются в этом компоненте:
1. dispatchDeleteMainData (DELETE)
2. dispatchUpdate (UPDATE)
*/

const PhotosOfInsta = (props) => {
  const resoleveOutputPhotoOfInsta = () => { // функция добавляющая или удаляющая данные в maindata
    props.maindata === null ? props.dispatchUpdate():props.dispatchDeleteMainData();
  }
    const contentButtonInst = props.maindata===null ?
     "Вывести фотографии из Instagram" : "Скрыть фотографии из Instagram"; // содержание кнопки в зависимости от того получены данные или нет
    return (
      <>
      <div className="title">
        <div className="imgbackground5"></div>
        <div className="headerline">
          <h1>Photos</h1>
          <div className="separator"></div>
        </div>
      </div>
        <div className="divbutton">
          <Button onClick={resoleveOutputPhotoOfInsta} variant="contained" className={'mainButton'} >
            {contentButtonInst}
          </Button>
        </div>
      { props.error!==null ? <p>Извините, произошла ошибка при загрузке данных...</p> : // если есть ошибки, выводим надпись
        props.maindata!==null ? // если данные получены, то выводим компонент FilterHashTag.
        <FilterHashTag />
        : ""}
      </>
    )
}
export default connect( // бросаем в пропсы только нужные для конкретного компонента данные и экшены.
  state=>({
    maindata:state.data.maindata,
    error:state.data.error
  }),
  dispatch=>({
     dispatchUpdate: () => dispatch(getPhotoInsta()),
     dispatchDeleteMainData: () => dispatch({type:DELETE}),
  })
)(PhotosOfInsta);
