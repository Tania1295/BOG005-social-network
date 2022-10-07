import { onNavigate } from '../main.js';
import { loginUser } from '../lib/firebase.js';

export const login = () => {
  const container = document.createElement('section');
  container.className = 'containerLogin';

  const imageLogo = document.createElement('img');
  imageLogo.src = './img/Logo-red-social.png';
  imageLogo.alt = 'Imagen logo Travelers';
  imageLogo.className = 'logoRed';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Travelers';

  const containerBackgroundEnd = document.createElement('section');
  containerBackgroundEnd.className = 'containerBackgroundEnd';

  const containerBackground = document.createElement('section');
  containerBackground.className = 'containerBackground';

  const formLogin = document.createElement('form');
  formLogin.className = 'loginContainer';

  const buttonEnter = document.createElement('button');
  buttonEnter.textContent = 'Iniciar sesión';
  buttonEnter.className = 'buttonEnter';

  const divButtonBack = document.createElement('div');
  divButtonBack.className = 'divButtonBack';

  const textBackButton = document.createElement('p');
  textBackButton.textContent = 'Regresar';
  textBackButton.setAttribute('id', 'textBackButton');

  const buttonBack = document.createElement('button');
  buttonBack.className = 'buttonBack';

  const imageBack = document.createElement('img');
  imageBack.src = './img/flecha-izquierda.png';
  imageBack.alt = 'Back';
  imageBack.className = 'imageBack';

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('required', '');
  inputEmail.setAttribute('id', 'emailLogin');

  const emailText = document.createElement('p');
  emailText.textContent = 'Escribe tu correo:';

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('required', '');
  inputPassword.type = 'password';
  inputPassword.setAttribute('id', 'passwordLogin');

  const passwordText = document.createElement('p');
  passwordText.textContent = 'Escribe tu contraseña:';

  const errorText = document.createElement('p');
  errorText.setAttribute('id', 'errorText');

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    loginUser(email, password)
      .then(() => {
        // localStorage.setItem('emailUser', email);
        onNavigate('/wall');
      })

      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
          errorText.textContent = 'La contraseña ingresada es errónea';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = 'El correo es inválido';
        } else if (errorCode === 'auth/user-not-found') {
          errorText.textContent = 'Usuario no encontrado';
        }
      });
  });

  container.append(imageLogo, title);

  divButtonBack.append(imageBack, textBackButton);

  buttonBack.appendChild(divButtonBack);

  formLogin.append(emailText, inputEmail,
    passwordText,
    inputPassword,
    buttonEnter,
    buttonBack,
    errorText,
  );

  containerBackground.append(container,
    formLogin);

  containerBackgroundEnd.appendChild(
    containerBackground
  );
  return containerBackgroundEnd;
};
