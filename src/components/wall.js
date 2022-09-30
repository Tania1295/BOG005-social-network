import { onNavigate } from '../main.js';
import { loginOut, auth, dataFirestore, addDoc, collection } from '../lib/firebase.js';


export const wall = () => {
  const container = document.createElement('section');

  const header = document.createElement('header');

  const userHdos = document.createElement('h2');
  userHdos.className = 'nameUser';
userHdos.textContent = auth.currentUser.displayName; //importar auth para que funcione

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'buttons';

  const message = document.createElement('article');

  const messageText = document.createElement('textarea');
  messageText.placeholder = 'Escribe aquí tu post';
  messageText.className = 'textUser';
const buttonPublish = document.createElement("button")
buttonPublish.textContent ="publicar"
buttonPublish.className= "buttons"
  buttonClose.addEventListener('click', () => {
    loginOut.then(() => {
      onNavigate('/');
    });
  });

  buttonPublish.addEventListener("click", ()=>{
    console.log(messageText.value)
  addDoc(collection(dataFirestore, "PostWall"),{
    post: messageText.value
  }).then(() => {
    console.log("Se guardo");
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  })

  container.append(header, userHdos, buttonClose, message, messageText, buttonPublish);

 
  return container;
};


