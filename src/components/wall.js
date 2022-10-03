import { onNavigate } from '../main.js';
import { loginOut, auth, dataFirestore, addDoc, collection, onAuthStateChanged, getDocs } from '../lib/firebase.js';

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

  const errorText = document.createElement('p');
  errorText.setAttribute('id', 'errorText');

  const buttonPublish = document.createElement('button');
  buttonPublish.className = 'buttonPublish';
  buttonPublish.textContent = 'Publicar';

  buttonClose.addEventListener('click', () => {
    loginOut.then(() => {
      onNavigate('/');
    });
  });

  buttonPublish.addEventListener("click", () => {
    if (messageText.value === "") {
      errorText.textContent = 'Escribe algo para publicar';
    } else {
      console.log(messageText.value)
      addDoc(collection(dataFirestore, "PostWall"), {
        post: messageText.value
      }).then(() => {
        console.log("Se guardo");
      })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  });

  container.append(header, userHdos, buttonClose, messageText, errorText, buttonPublish);

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      // const nameDisplay = document.querySelector(".nameUser");
      userHdos.textContent = user.displayName;
      console.log(user);
      getDocs(collection(dataFirestore, "PostWall"))
        .then((snapshot) => {
          console.log(snapshot.docs)
          snapshot.forEach(doc => {
            console.log(doc.data().post)
            const containerPost = document.createElement("article");
            const textPost = document.createElement("p");
            textPost.textContent = doc.data().post;
            containerPost.appendChild(textPost)
            container.appendChild(containerPost)
          });
        })
    } else {
      console.log('No User');
    }

  });
  return container;
};