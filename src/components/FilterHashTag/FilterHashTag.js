import React, {Component} from "react";
import GenerationPhotoList from "../GenerationPhotoList/GenerationPhotoList.js";
import  "../../App.css";
/*
Алгоритм работы компонента
1. в пропсы пробрасывается массив со всеми фотками и разрешение на вывод
2. при наборе хэштега в строку, фильтурются фотками
3. Если поле фильтра пустое- вытащить все фотки,
иначе то вытащить те, которые прошли через фильтр
Данные тэга лежат в data.[эл-т массива].tags.[элемент массива с тэгами]
*/
// Дописать обработку введенных данных!!!
class FilterHashTag extends Component {
    state = {
      dataOfInsta:undefined,
      dataOfInstaFiltered:null,
      hasTag: undefined, // здесь будет хэш-тэг, по которому будем фильтровать
      currentHashTag:'',// здесь будет текущий хэштег, который мы вводим
    }
    componentWillReceiveProps(nextProps) {
      this.inputDataOfHashTag(nextProps);
      return true;
    }
    inputDataOfHashTag = (data) => {
      data && this.setState({dataOfInsta:data});
    }
    changeValueHashTag = async(e) => {
      if(e.target.value==='')this.setState({dataOfInstaFiltered:null});
      else await this.setState({dataOfInstaFiltered:this.state.dataOfInsta.photos.data.filter(item=>{
        if(item.tags.length!==0 && item.tags.reduce(
          (acc,item)=>item.indexOf(e.target.value)!==-1 ? ++acc : acc //.replace(/#/g, '')
          ,0) > 0) return item;
      })})
    }
    render(){
      const currentHashTag = this.state.currentHashTag;
      const notFilteredPhotos = this.props.photos!==undefined ? this.props.photos.data: this.props.photos;
      const filteredPhotos = this.state.dataOfInstaFiltered;
      const resolution = this.props.resolution;
      return (
        <>
          <div>
            <input placeholder="Введите содержимое хэштэга без '#' " className="forInput" onChange={this.changeValueHashTag} type="text" />
          </div>
          <GenerationPhotoList photos = {filteredPhotos===null ? notFilteredPhotos : filteredPhotos} resolution={resolution}/>
        </>
      )
    }
}
export default FilterHashTag;