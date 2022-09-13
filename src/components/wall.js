import { onNavigate } from '../main.js';
import { loginOut } from '../lib/firebase.js';

export const wall = () => {
  const container = document.createElement('section');

  const header = document.createElement('header');

  const user = document.createElement('h2');
  user.textContent = 'Nombre Apellidos';

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'buttons';

  const message = document.createElement('article');

  const messageText = document.createElement('textarea');
  messageText.textContent = 'Escribe aquí tu post';
  messageText.className = 'textUser';

  buttonClose.addEventListener('click', (e) => {
    e.preventDefault();
    loginOut();
    console.log(loginOut);
    onNavigate('/');
  });

  container.append(header, user, buttonClose, message, messageText);

  return container;
};
