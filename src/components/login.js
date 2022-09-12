import { onNavigate } from '../main.js';

export const login = () => {
  const container = document.createElement('section');
  container.className = 'containerLogin';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Travelers';

  const subTitle = document.createElement('h3');
  subTitle.className = 'subTitle';
  subTitle.textContent = 'Por el mundo';

  const formLogin = document.createElement('form');
  const buttonEnter = document.createElement('button');
  buttonEnter.textContent = 'Iniciar Sesion';
  buttonEnter.className = 'buttons';

  const buttonBack = document.createElement('button');
  buttonBack.className = 'buttons';
  buttonBack.textContent = 'Regresar';

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('required', '');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('required', '');
  inputPassword.type = 'password';

  const emailText = document.createElement('p');
  emailText.textContent = 'Escribe tu correo:';

  const passwordText = document.createElement('p');
  passwordText.textContent = 'Escribe tu contraseña:';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    onNavigate('/wall');
  });

  container.append(
    title,
    subTitle,
    formLogin,
    buttonBack,
  );

  formLogin.append(
    emailText,
    inputEmail,
    passwordText,
    inputPassword,
    buttonEnter,
  );
  return container;
};
