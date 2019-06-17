import React, {Component} from "react";
import  "../../App.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FilterHashTag from "../FilterHashTag/FilterHashTag.js";

// const useStyles = () => makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));
class PhotosOfInsta extends Component {
  state = {
    dataOfInsta:undefined,
    responseWithToken:undefined,
    resolutionInsta:false,
    contentButtonInsta:'Вывести фотографии из Instagram',
  }
  componentDidMount() {
    this.props.state.dispatchUpdate();
  }
  resoleveOutputPhotoOfInsta = () => {
    // если разрешение true, то меняем его на false и меняем контент кнопки
    this.state.resolutionInsta === false ? this.setState({ resolutionInsta:true, contentButtonInsta:'Скрыть фотографии из Instagram' }):
    this.setState({ resolutionInsta:false, contentButtonInsta: 'Вывести фотографии из Instagram'})
  }
  useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  render(){
    const contentButtonInst = this.state.contentButtonInsta;
    const dataForOutPhotos1 =this.props.state;
    const resolution=this.state.resolutionInsta;
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
          <Button onClick={this.resoleveOutputPhotoOfInsta} variant="contained" className={'knopka'} >
            {contentButtonInst}
          </Button>
        </div>
      {dataForOutPhotos1.state.data.maindata===null ? <p>Загрузка данных...</p> :
        <FilterHashTag photos = {dataForOutPhotos1} callback={this.props.state.dispatchFilterHashTag} resolution={resolution}/>
      }
      </>
    )
  }
}
export default PhotosOfInsta;
