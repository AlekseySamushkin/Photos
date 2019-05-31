import React, {Component} from "react";

const GenerationPhotoList = (photosAndResolution) => {
    const result = photosAndResolution.photos !== undefined && photosAndResolution.resolution===true ?
    photosAndResolution.photos.data.map(item => <li key={item.id}> <img alt={item.id} src={item.images.standard_resolution.url}/> </li>)
    : ""
    // создаем элементы списка. Как ключ используем id каждой фотографии
    return (
      <div>
        <h3>Фотографии из Instagram</h3>
        <ul>{result}</ul>
      </div>
    )// выводим получившийся список

}
export default GenerationPhotoList;
