import React, {Component} from "react";

function Image(id, lowResolution, standardResolution) {
  this.id = id;
  this.lowResolution = lowResolution;
  this.standardResolution = standardResolution;
  this.bigImg = false;
}

class GenerationPhotoList extends Component {
    state = {
      imgs:undefined,
    }
    changeSizePhoto = (id) => () => {
      this.setState({imgs:this.state.imgs.map(item=>{
          if (item.id===id) item.bigImg === false ? item.bigImg = true: item.bigImg = false;
          return item;
        })
      })
    }
    componentWillReceiveProps(nextProps) {
      this.inputDataOfInstaInState(nextProps);
      return true;
    }
    inputDataOfInstaInState = (dataOfInsta) => {
      console.log("dataOfInsta",dataOfInsta);
      if(dataOfInsta.photos !== undefined) this.setState({imgs: dataOfInsta.photos.map(item =>
        new Image(item.id,
          item.images.low_resolution.url,
          item.images.standard_resolution.url)
      )});
    }
    render(){
      const resolution = this.props.resolution;
       const result = this.state.imgs !== undefined && resolution === true ?
       this.state.imgs.map(item =>
        <li onClick={this.changeSizePhoto(item.id)} key={item.id}>
            <img alt={item.id} src={item.bigImg === false ? item.lowResolution: item.standardResolution }/>
        </li>)
      : ""
      // создаем элементы списка. Как ключ используем id каждой фотографии
      return (
        <div className="photosContainer">
          <h3>Фотографии из Instagram</h3>
          <ul>{result}</ul>
        </div>
      )// выводим получившийся список
    }
}
export default GenerationPhotoList;
