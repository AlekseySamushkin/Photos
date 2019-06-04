// по примеру из видео
// КОД пока несвязан с проектом!
const tasks = (state=[], action) => {
  switch (action.type) {
    case 'OUTPUT_DATA':
      return [
        ...state,{
          id:action.id,
          text:action.text,
          isCompleted:action.isCompleted
        }
      ];
      break;
    default:
      return state;
  }
}
