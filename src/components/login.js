import { onNavigate } from '../main.js';

export const login = () => {
  const container = document.createElement('section');
  const title = document.createElement('h1');
  const buttonEnter = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const emailText = document.createElement('p');
  const passwordText = document.createElement('p');

  buttonEnter.textContent = 'Iniciar Sesion';
  buttonBack.textContent = 'Regresar';
  title.textContent = 'Travelers';
  emailText.textContent = 'Escribe tu correo:';
  passwordText.textContent = 'Escribe tu contraseña:';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonEnter.addEventListener('click', () => {
    onNavigate('/wall');
  });

  container.append(
    title,
    emailText,
    inputEmail,
    passwordText,
    inputPassword,
    buttonEnter,
    buttonBack,
  );
  return container;
};
