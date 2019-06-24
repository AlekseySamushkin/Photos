import  "../../App.css";
//import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Button from '@material-ui/core/Button';
import FilterHashTag from "../FilterHashTag/FilterHashTag.js";
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
3.
*/
// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));
const PhotosOfInsta = (props) => {
  const resoleveOutputPhotoOfInsta = () => {
    props.maindata === null ? props.dispatchUpdate():props.dispatchDeleteMainData();
  }
    const contentButtonInst = props.maindata===null ? "Вывести фотографии из Instagram" : "Скрыть фотографии из Instagram";
    const error=props.error;
    return (
      <>
      <div className="title">
        <div className="imgfon5"></div>
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
      { error!==null ? <p>Извините, произошла ошибка при загрузке данных...</p> :
        props.maindata!==null ?
        <FilterHashTag />
        : ""
      }
      </>
    )
}
export default connect( // переделать контент
  state=>({maindata:state.data.maindata,error:state.data.error}),
  dispatch=>({
     dispatchUpdate: () => dispatch(getPhotoInsta()),
     dispatchDeleteMainData: () => dispatch({type:DELETE}),
  })
)(PhotosOfInsta);
