import React, {Component} from "react";
import  "../App.css";
import OutputPhoto from "./getPhotoInsta.js";

class Info extends Component {
  state = {
    dataOfInsta:undefined,
    responseWithToken:undefined,
    resolutionInsta:false,
    contentButtonInsta:'Вывести фотографии из Instagram',
  }
  componentDidMount() {
    this.getPhotoInsta();
  }
  getPhotoInsta = async(e) => { // getPhotoInsta - функция, делающая запрос и записывающая полученные данные в стейт
    fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=3294255871.a18db21.c3cbd5d04d7f425492ff038775f721d6`) // выполняем запрос на получение фоток инсты
    .then(r=>r.json()) // переводим в json формат
    .then(r=>this.setState({dataOfInsta:r})) // записываем в стейт
    .catch(err=>console.log("error in request Instagram", err)); // ловим ошибки
  }

  resoleveOutputPhotoOfInsta = () => {
    // если разрешение true, то меняем его на false и меняем контент кнопки
    this.state.resolutionInsta === false ? this.setState({ resolutionInsta:true, contentButtonInsta:'Скрыть фотографии из Instagram' }):
    this.setState({ resolutionInsta:false, contentButtonInsta: 'Вывести фотографии из Instagram'})
  }

  render(){
    let contentButtonInst = this.state.contentButtonInsta;
    let photosInsta =  this.state.dataOfInsta !== undefined && this.state.resolutionInsta===true ?
    <OutputPhoto photos = {this.state.dataOfInsta.data}/> : '' // если в стейте есть данные, то кидаем их в пропсы компонента OutputPhoto
    return (
      <>
      <div className="title">
        <div className="imgfon5"></div>
        <div className="headerline">
          <h1>Фото друзей</h1>
          <div className="separator"></div>
        </div>
      </div>
      <div className="button">
        <button onClick={this.resoleveOutputPhotoOfInsta} className="knopka" value="Ввести">{contentButtonInst}</button>
      </div>
      {photosInsta /* выводим фото с инсты*/}
      </>
    )
  }
}
export default Info;
