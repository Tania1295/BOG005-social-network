import { onNavigate } from '../main.js';
import { loginUser, loginOut } from '../lib/firebase.js';

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
  inputEmail.setAttribute('id', 'emailLogin');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('required', '');
  inputPassword.type = 'password';
  inputPassword.setAttribute('id', 'passwordLogin');

  const emailText = document.createElement('p');
  emailText.textContent = 'Escribe tu correo:';

  const passwordText = document.createElement('p');
  passwordText.textContent = 'Escribe tu contraseña:';

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault()
    loginOut()
      console.log(loginOut);
      onNavigate('/');
   
    
  });
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    
    loginUser(email, password)
      .then((userCredential) => {
        onNavigate('/wall');
      })

      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        if (errorCode === "auth/email-already-in-use") {
       errorText.textContent = "Este correo ya se encuentra registrado";
        } else if (errorCode === "auth/weak-password") {
          errorText.textContent = "La contraseña debe tener al menos 6 carácteres";
        } else if (errorCode === "auth/invalid-email") {
          errorText.textContent = "El correo es inválido";
        }
      });
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
