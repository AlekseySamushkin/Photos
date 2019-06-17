import React ,{Component} from "react";
import PhotosOfInsta from "./components/PhotosOfInsta/PhotosOfInsta.js"
import {connect} from 'react-redux';
import {UPDATE,FILTER_HASH_TAG} from './constants';

class App extends Component {

  render(){
    return(
      <PhotosOfInsta state={this.props}/>
    );
  }
}

export default connect(
  state=>({state}),
  dispatch=>({
     dispatchFilterHashTag: (obj) => dispatch({type:FILTER_HASH_TAG , obj}),
     dispatchUpdate: async() => {
        // getPhotoInsta - функция, делающая запрос и записывающая полученные данные в стейт "start": "set PORT=8080 && react-scripts start",
         await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=3294255871.a18db21.c3cbd5d04d7f425492ff038775f721d6`) // выполняем запрос на получение фоток инсты
         .then(r=>r.json()) // переводим в json формат
         .then(r=>{
           console.log("r",r)
           dispatch({type:UPDATE , r})
           }) // записываем в стейт
         //.catch(err=>console.log("error in request Instagram", err)); // ловим ошибки
     },
  })
)(App);
