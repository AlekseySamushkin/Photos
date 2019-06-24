import  "../../App.css";
import React from "react";
import GenerationPhotoList from "../GenerationPhotoList/GenerationPhotoList.js";
import CustomizedInputBase from '../Input/Input.js'
import {connect} from 'react-redux';
import {FILTER_HASH_TAG} from '../../constants';
/*
Данные Store, которые использует компонент:
1. state.data.maindata
2. state.data.filteredData
3.
Экшены, которые вызываются в этом компоненте:
1.dispatchFilterHashTag
*/

const FilterHashTag = (props) => {
      const changeValueHashTag = async(e) => {
        // добавление отфильтрованных данных в store.
        let filtered;
        if(e.target.value!==''&& e.target.value!==null && props.maindata!==undefined){
          filtered=props.maindata.filter(item=>{
           if(item.tags.length!==0 && item.tags.reduce(
             (acc,item)=>item.indexOf(e.target.value.replace(/#/g, ''))!==-1 ? ++acc : acc
             ,0) > 0) return item;
           else return "";
         })
         await props.dispatchFilterHashTag(filtered);
       }
       else props.dispatchFilterHashTag(null);
      }
      const notFilteredPhotos = props.maindata!==undefined ? props.maindata: props.state.data;
      const filteredPhotos = props.filteredData;
      return (
        <>
          <div className="divinput">
            {CustomizedInputBase(changeValueHashTag)}
          </div>
          <GenerationPhotoList
           photos = {filteredPhotos===undefined || filteredPhotos===null ? notFilteredPhotos : filteredPhotos}

          />
        </>
      )
}

export default connect(
  state=>({maindata:state.data.maindata,filteredData:state.data.filteredData}),
  dispatch=>({
     dispatchFilterHashTag: (obj) => dispatch({type:FILTER_HASH_TAG , obj}),
  })
)(FilterHashTag);
