import React, {Component} from "react";
import  "../../App.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//import GenerationPhotoList from "../GenerationPhotoList/GenerationPhotoList.js";
import FilterHashTag from "../FilterHashTag/FilterHashTag.js";

const useStyles = () => makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class PhotosOfInsta extends Component {
  state = {
    dataOfInsta:undefined,
    responseWithToken:undefined,
    resolutionInsta:false,
    contentButtonInsta:'Вывести фотографии из Instagram',
  }
  componentDidMount() {
    this.getPhotoInsta();
  }
  getPhotoInsta = async(e) => { // getPhotoInsta - функция, делающая запрос и записывающая полученные данные в стейт "start": "set PORT=8080 && react-scripts start",
    fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=3294255871.a18db21.c3cbd5d04d7f425492ff038775f721d6`) // выполняем запрос на получение фоток инсты
    .then(r=>r.json()) // переводим в json формат
    .then(r=>{
      // console.log(r);
      this.setState({dataOfInsta:r})
      }) // записываем в стейт
    .catch(err=>console.log("error in request Instagram", err)); // ловим ошибки
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
    const dataForOutPhotos = this.state.dataOfInsta; // если в стейте есть данные, то кидаем их в пропсы компонента OutputPhoto
    const resolution=this.state.resolutionInsta;
    const classes = useStyles();
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
          <Button onClick={this.resoleveOutputPhotoOfInsta} variant="contained" className={'knopka'+' '+classes.button} >
            {contentButtonInst}
          </Button>
        </div>
      <FilterHashTag photos = {dataForOutPhotos} resolution={resolution}/>
      </>
    )
  }
}
export default PhotosOfInsta;
