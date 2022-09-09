import { onNavigate } from '../main.js';

export const register = () => {
  const container = document.createElement('section');
  container.className = 'containerRegister';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Travelers';

  const subTitle = document.createElement('h3');
  subTitle.className = 'subTitle';
  subTitle.textContent = 'Por el mundo';

  const buttonSign = document.createElement('button');
  buttonSign.className = 'buttons';
  buttonSign.textContent = 'Registrarme';

  const buttonBack = document.createElement('button');
  buttonBack.className = 'buttons';
  buttonBack.textContent = 'Regresar';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo Electrónico';

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Nombre';

  const inputUser = document.createElement('input');
  inputUser.type = 'text';
  inputUser.placeholder = 'Usuario';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';

  const emailText = document.createElement('p');
  emailText.textContent = 'Escribe tu correo:';

  const nameText = document.createElement('p');
  nameText.textContent = 'Escribe tu nombre:';

  const userText = document.createElement('p');
  userText.textContent = 'Nombre de usuario:';

  const passwordText = document.createElement('p');
  passwordText.textContent = 'Contraseña';

  buttonSign.addEventListener('click', () => {
    onNavigate('/wall');
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  container.append(
    title,
    subTitle,
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
