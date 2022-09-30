import { onNavigate } from '../main.js';
import { loginOut, auth, dataFirestore, addDoc, collection } from '../lib/firebase.js';


export const wall = () => {
  const container = document.createElement('section');
  container.setAttribute('id', 'containerWall');

  const header = document.createElement('header');
  header.className = 'headerWall';
  const imageWall = document.createElement('img');
  imageWall.src = './img/Logo-red-social.png';
  imageWall.alt = 'Imagen logo Travelers';
  imageWall.className = 'logoWall';
  const subTitleWall = document.createElement('h2');
  subTitleWall.textContent = "Travelers";
  const userHdos = document.createElement('h1');
  userHdos.className = 'nameUser';
userHdos.textContent = auth.currentUser.displayName; //importar auth para que funcione

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'buttonClose';

  const post = document.createElement('article');
  post.className = 'sectionPost';

  const messageText = document.createElement('textarea');
  messageText.placeholder = 'Escribe aquí tu post';
  messageText.className = 'textUser';
  const buttonPublish = document.createElement('button');
  buttonPublish.className = 'buttonPublish';
  buttonPublish.textContent = 'Publicar';

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

 
  
  
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      // const nameDisplay = document.querySelector(".nameUser");
      userHdos.textContent = user.displayName;
      console.log(user);
    } else {
      console.log('No User');
    }

  });
  return container;
};