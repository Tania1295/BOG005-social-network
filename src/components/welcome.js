import { onNavigate } from '../main.js';

export const welcome = () => {
  const container = document.createElement('section');
  const imageLogo = document.createElement('img');
  const title = document.createElement('h1');
  const slogan = document.createElement('p');
  const registerText = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonSignUp = document.createElement('button');

  buttonLogin.className = "buttons";
  buttonLoginGoogle.className = "buttons";
  buttonSignUp.className = "buttons";
  title.className = "title";
  container.className = "containerWelcome";

  imageLogo.src = './Logo-red-social.png';
  imageLogo.alt = 'Imagen';
  imageLogo.className = 'logoRed';
  title.textContent = 'Travelers';
  slogan.textContent = 'Sitio para compartir tus experiencias por el mundo.';
  buttonLogin.textContent = 'Ingresar con correo';
  buttonLoginGoogle.textContent = 'Ingresar con Google';
  registerText.textContent = '¿No tienes una cuenta?';
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
    buttonLoginGoogle,
    registerText,
    buttonSignUp,
  );
  return container;
};
