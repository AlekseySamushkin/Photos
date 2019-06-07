import { FILTER,ADD } from '../constants';

const CHECKCOMPOUND = "Проверьте соедниение";
const getPhotoInsta = async(e) => { // getPhotoInsta - функция, делающая запрос и записывающая полученные данные в стейт "start": "set PORT=8080 && react-scripts start",
  await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=3294255871.a18db21.c3cbd5d04d7f425492ff038775f721d6`) // выполняем запрос на получение фоток инсты
  .then(r=>r.json()) // переводим в json формат
  .then(r=>{
    // console.log(r);
    this.setState({dataOfInsta:r})
    }) // записываем в стейт
  .catch(err=>console.log("error in request Instagram", err)); // ловим ошибки
}
const INITIAL = getPhotoInsta();
// по примеру из видео
// КОД пока несвязан с проектом!
const data = (state=[INITIAL], action) => {
  switch (action.type) {
    case ADD:
      return {
          data:action.data,
        }
      break;
    default:
      return state;
  }
}
export default data;
