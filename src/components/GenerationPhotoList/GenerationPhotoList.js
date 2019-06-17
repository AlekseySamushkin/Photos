import React, {Component} from "react";
import RecipeReviewCard from "../border/border.js";


function Image(id, created_time, full_name, profile_picture, lowResolution, standardResolution,users_in_photo,location) {
  this.id = id;
  this.created_time=created_time;
  this.full_name=full_name;
  this.profile_picture=profile_picture;
  this.lowResolution = lowResolution;
  this.standardResolution = standardResolution;
  this.users_in_photo=users_in_photo;
  this.location=location;
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
      if(dataOfInsta.photos !== undefined) this.setState({imgs: dataOfInsta.photos.map(item =>
        new Image(item.id,
          item.created_time,
          item.user.full_name,
          item.user.profile_picture,
          item.images.low_resolution.url,
          item.images.standard_resolution.url,
          item.users_in_photo,
          item.location
        )
      )});
    }
    render(){
      const resolution = this.props.resolution;
       const result = this.state.imgs !== undefined && resolution === true ?
       this.state.imgs.map(item =>
        <li onClick={this.changeSizePhoto(item.id)} key={item.id}>
          <RecipeReviewCard
            alt={item.id} created_time={item.created_time}
            full_name={item.full_name} users_in_photo={item.users_in_photo}
            profile_picture={item.profile_picture} sizeBig={item.bigImg}
            src={item.bigImg === false ? item.lowResolution: item.standardResolution }
            location={item.location}
          />
        </li>)
      : "";
      // создаем элементы списка. Как ключ используем id каждой фотографии
      return (
        <div className="photosContainer">
          <h2>Фотографии из Instagram</h2>
          <ul>{result}</ul>
        </div>
      )// выводим получившийся список
    }
}
export default GenerationPhotoList;
