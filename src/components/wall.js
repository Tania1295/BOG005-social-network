import { onNavigate } from '../main.js';

export const wall = () => {
  const container = document.createElement('section');
  const header = document.createElement('header');
  const user = document.createElement('h2');
  const buttonClose = document.createElement('button');
  const message = document.createElement('article');
  const messageText = document.createElement('textarea');

  user.textContent = 'Nombre Apellidos';
  buttonClose.textContent = 'Cerrar Sesión';
  messageText.textContent = 'Escribe aquí tu post';

  buttonClose.addEventListener('click', () => {
    onNavigate('/');
  });

  container.append(header, user, buttonClose, message, messageText);

  return container;
};
