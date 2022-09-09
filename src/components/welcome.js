import { onNavigate } from '../main.js';

export const welcome = () => {
  const container = document.createElement('section');
  container.className = 'containerWelcome';

  const imageLogo = document.createElement('img');
  imageLogo.src = './img/Logo-red-social.png';
  imageLogo.alt = 'Imagen logo Travelers';
  imageLogo.className = 'logoRed';

  const title = document.createElement('h1');
  title.textContent = 'Travelers';
  title.className = 'title';

  const slogan = document.createElement('p');
  slogan.textContent = 'Sitio para compartir tus experiencias por el mundo.';

  const registerText = document.createElement('p');
  registerText.textContent = '¿No tienes una cuenta?';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Ingresar con correo';
  buttonLogin.className = 'buttons';

  const orText = document.createElement('p');
  orText.textContent = 'o';

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.textContent = 'Ingresar con Google';
  buttonLoginGoogle.className = 'buttons';

  const buttonSignUp = document.createElement('button');
  buttonSignUp.className = 'buttonSignUp';
  buttonSignUp.textContent = 'Regístrate.';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonSignUp.addEventListener('click', () => {
    onNavigate('/register');
  });

  container.append(
    imageLogo,
    title,
    slogan,
    buttonLogin,
    orText,
    buttonLoginGoogle,
    registerText,
    buttonSignUp,
  );
  return container;
};
