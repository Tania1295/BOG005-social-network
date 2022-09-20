import { onNavigate } from '../main.js';
import { loginOut } from '../lib/firebase.js';
// import { displayName } from '../lib/firebase.js';

export const wall = () => {
  const container = document.createElement('section');

  const header = document.createElement('header');

  const user = document.createElement('h2');

  

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'buttons';

  const message = document.createElement('article');

  const messageText = document.createElement('textarea');
  messageText.placeholder = 'Escribe aquí tu post';
  messageText.className = 'textUser';

  buttonClose.addEventListener('click', () => {
    loginOut.then(() => {
      onNavigate('/');
    });
  });

  container.append(header, user, buttonClose, message, messageText);

  return container;
};



//Traemos el nombre del usuario, sin el nombre de usuario las preguntas se bloquean y no se muestran//
// function getName(){
//   const name = document.getElementById("name")
//   if(name){
//     localStorage.setItem('username', name.value);
//     page1.style.display="none"
//     question1.style.display="block"
//     question2.style.display="block"
//     question3.style.display="block"
//     playername.innerHTML="¡Hola, Bienvenida " + name.value + "!"
//   }
// }

//   const playername= document.getElementById("playername")
//   const page1= document.getElementById("page1")
//   const question1= document.getElementById("question1")

// //Cuando el nombre del usuario se escribe, se desbloquean las preguntas//
//   if(question1){
//   console.log(question1.style)
//   question1.style.display="none"
//   question2.style.display="none"
//   question3.style.display="none"
// }