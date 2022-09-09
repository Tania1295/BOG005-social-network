import { onNavigate } from '../main.js';

export const register = () => {
  const container = document.createElement('section');
  const title = document.createElement('h1');
  const buttonSign = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputName = document.createElement('input');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const emailText = document.createElement('p');
  const nameText = document.createElement('p');
  const userText = document.createElement('p');
  const passwordText = document.createElement('p');

  buttonSign.className = "buttons";
  buttonBack.className = "buttons";
  title.className = "title";
  container.className = "containerRegister";

  buttonSign.textContent = 'Registrarme';
  buttonBack.textContent = 'Regresar';
  title.textContent = 'Travelers';
  emailText.textContent = 'Escribe tu correo:';
  nameText.textContent = 'Escribe tu nombre:';
  userText.textContent = 'Nombre de usuario:';
  passwordText.textContent = 'Contraseña';

  buttonSign.addEventListener('click', () => {
    onNavigate('/wall');
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  container.append(
    title,
    nameText,
    inputName,
    emailText,
    inputEmail,
    userText,
    inputUser,
    passwordText,
    inputPassword,
    buttonSign,
    buttonBack,
  );
  return container;
};
