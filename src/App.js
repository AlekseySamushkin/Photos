import React ,{Component} from "react";
import PhotosOfInsta from "./components/PhotosOfInsta/PhotosOfInsta.js"
import {connect} from 'react-redux';
import {UPDATE,FILTER_HASH_TAG} from './constants';
import {getPhotoInsta} from './actions/action'
/*
Сделать обработку ошибки при неудачном запросе
*/
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
     dispatchUpdate: () => dispatch(getPhotoInsta()),
  })
)(App);
