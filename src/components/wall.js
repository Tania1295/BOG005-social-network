import { onNavigate } from '../main.js';
import { loginOut, auth, onAuthStateChanged } from '../lib/firebase.js';


export const wall = () => {
  const container = document.createElement('section');

  const header = document.createElement('header');

  const userHdos = document.createElement('h2');
  userHdos.className = 'nameUser';
//userHdos.textContent = auth.currentUser.displayName;

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'buttons';

  const message = document.createElement('article');

  const messageText = document.createElement('textarea');
  messageText.placeholder = 'Escribe aquí tu post';
  messageText.className = 'textUser';

  buttonClose.addEventListener('click', () => {
    loginOut.then(() => {
      onNavigate('/');
    });
  });

  container.append(header, userHdos, buttonClose, message, messageText);

    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        // const nameDisplay = document.querySelector(".nameUser");
        userHdos.textContent = user.displayName;
        
        console.log(user);
      } else {
        console.log('No User');
      }
    }); 
 
  return container;
};


