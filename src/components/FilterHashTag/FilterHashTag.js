import React, {Component} from "react";
import GenerationPhotoList from "../GenerationPhotoList/GenerationPhotoList.js";
import CustomizedInputBase from '../Input/Input.js'
import  "../../App.css";
/*
Алгоритм работы компонента
1. в пропсы пробрасывается массив со всеми фотками и разрешение на вывод
2. при наборе хэштега в строку, фильтурются фотками
3. Если поле фильтра пустое- вытащить все фотки,
иначе то вытащить те, которые прошли через фильтр
*/

class FilterHashTag extends Component {
    state = {
      dataOfInsta:undefined,
      dataOfInstaFiltered:null,
    }
    componentWillReceiveProps(nextProps) {
      this.inputDataOfHashTag(nextProps);
      return true;
    }
    inputDataOfHashTag = (data) => {
      data && this.setState({dataOfInsta:data.photos.state.data.maindata});
    }
    changeValueHashTag = async(e) => {
      // добавление отфильтрованных данных в store.
      let filtered;
      if(e.target.value!==''&& e.target.value!==null && this.state.dataOfInsta!==undefined){
        filtered=this.state.dataOfInsta.data.filter(item=>{
         if(item.tags.length!==0 && item.tags.reduce(
           (acc,item)=>item.indexOf(e.target.value.replace(/#/g, ''))!==-1 ? ++acc : acc
           ,0) > 0) return item;
         else return ""; 
       })
       await this.props.callback(filtered);
     }
     else this.props.callback(null);
     //this.setState({dataOfInstaFiltered:filtered}); // для update. Заменить костыль
      // добавление отфильтрованных данных в state.
      // if(e.target.value==='' ||this.state.dataOfInsta===undefined) this.setState({dataOfInstaFiltered:null});
      // else await this.setState({dataOfInstaFiltered:this.state.dataOfInsta.data.filter(item=>{
      //   if(item.tags.length!==0 && item.tags.reduce(
      //     (acc,item)=>item.indexOf(e.target.value.replace(/#/g, ''))!==-1 ? ++acc : acc
      //     ,0) > 0) return item;
      // })})
    }
    render(){
      const notFilteredPhotos = this.props.photos.state.data.maindata!==undefined ? this.props.photos.state.data.maindata.data: this.props.photos.state.data;
      const filteredPhotos = this.props.photos.state.data.filteredData;///store.getState().data.filteredData;
      const resolution = this.props.resolution;
      return (
        <>
          <div className="divinput">
            {CustomizedInputBase(this.changeValueHashTag)}
          </div>
          <GenerationPhotoList photos = {filteredPhotos===undefined || filteredPhotos===null ? notFilteredPhotos : filteredPhotos} resolution={resolution}/>
        </>
      )
    }
}
export default FilterHashTag;
