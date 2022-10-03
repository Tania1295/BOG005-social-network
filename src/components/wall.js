import { onNavigate } from '../main.js';
import { loginOut, auth, dataFirestore, addDoc, collection, onAuthStateChanged, getDocs } from '../lib/firebase.js';

export const wall = () => {
  const container = document.createElement('section');
  container.setAttribute('id', 'containerWall');

  const header = document.createElement('header');
  header.className = 'headerWall';

  const mainWall = document.createElement('section');
  mainWall.className = 'mainWall';

  const imageWall = document.createElement('img');
  imageWall.src = './img/Logo-red-social.png';
  imageWall.alt = 'Imagen logo Travelers';
  imageWall.className = 'logoWall';

  const subTitleWall = document.createElement('h2');
  subTitleWall.textContent = "Travelers";

  const userNameProfile = document.createElement('h1');
  userNameProfile.className = 'nameUser';
  userNameProfile.textContent = auth.currentUser.displayName;

  const buttonClose = document.createElement('button');
  buttonClose.className = 'buttonClose';

  const divButtonBack = document.createElement('div');
  divButtonBack.className = "divButtonBack";

  const textBackButton = document.createElement('p');
  textBackButton.textContent = 'Cerrar Sesión';
  textBackButton.setAttribute('id', 'textBackButton');

  const imageBack = document.createElement('img');
  imageBack.src = './img/cerrar-sesion.png';
  imageBack.alt = 'Back';
  imageBack.className = 'imageBack';

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

  divButtonBack.append(imageBack, textBackButton);

  buttonClose.appendChild(divButtonBack);

  mainWall.append(header, container)

  header.append(userNameProfile, buttonClose)

  container.append(header, messageText, errorText, buttonPublish);

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      // const nameDisplay = document.querySelector(".nameUser");
      userNameProfile.textContent = user.displayName;
      console.log(user);
      getDocs(collection(dataFirestore, "PostWall"))
        .then((snapshot) => {
          console.log(snapshot.docs)
          snapshot.forEach(doc => {
            console.log(doc.data().post)
            const containerPost = document.createElement("article");
            containerPost.className = 'containerPost';
            const textPost = document.createElement("p");
            const imageLike = document.createElement("img");
            imageLike.src = './img/iconomegusta.png';
            imageLike.alt = 'Like';
            imageLike.className = 'imageLike';
            textPost.textContent = doc.data().post;
            containerPost.append(textPost, imageLike);
            container.appendChild(containerPost);

            const likeEvent = document.querySelector(".imageLike")
            likeEvent?.addEventListener('click', () => {
              alert('Diste like')
            })
          });

        })
    } else {
      console.log('No User');
    }

  });
  return mainWall;
};