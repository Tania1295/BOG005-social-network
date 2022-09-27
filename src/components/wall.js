import { onNavigate } from '../main.js';
import { loginOut } from '../lib/firebase.js';
//import { getName } from '../components/register.js';

export const wall = () => {
  const container = document.createElement('section');

  const header = document.createElement('header');

  const user = document.createElement('h2');

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'buttons';

  const message = document.createElement('article');

  const messageText = document.createElement('textarea');
  messageText.placeholder = 'Escribe aquí tu post';
  messageText.className = 'textUser';

  buttonClose.addEventListener('click', () => {
    loginOut.then(() => {
      // localStorage.clear();
      onNavigate('/');
    });
  });

  container.append(header, user, buttonClose, message, messageText);

  return container;
};
