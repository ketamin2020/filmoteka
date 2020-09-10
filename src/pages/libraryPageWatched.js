import movieListItem from '../templates/movieListItem.hbs';
import btnQueueWatched from '../templates/btnQueueWatched.hbs';
import { ROOT_DOM } from '../constants';

const libraryPageWatched = () => {
  const markupLibrary = btnQueueWatched();
  ROOT_DOM.innerHTML = markupLibrary;
  document.querySelector('button[data-action="watched"]').classList.add('active');
  const buttonsContainerRefs = document.querySelector('.library__buttons');
  const filmListRef = document.querySelector('.films-list');
  buttonsContainerRefs.addEventListener('click', handleButtonClick);
  if(localStorage.getItem('filmsWatched')){
     const filmsArray = JSON.parse(localStorage.getItem('filmsWatched'));
     const markup = movieListItem(filmsArray);
     filmListRef.innerHTML = markup;
  }
  
  function handleButtonClick(e) {
    if (!e.target.dataset.action) {
      return;
    }
    if(e.target.dataset.action === 'watched'){
        window['router'].navigate('library/watched');
        
    }
    if(e.target.dataset.action === 'queue'){
        window['router'].navigate('library/queue');
        
    }
  }
};

export default libraryPageWatched;