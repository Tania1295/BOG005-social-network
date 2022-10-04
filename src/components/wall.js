import { onNavigate } from '../main.js';
import { loginOut, dataFirestore, getDocs, addDoc, collection } from '../lib/firebase.js';

export const wall = () => {
  const container = document.createElement('section');
  container.setAttribute('id', 'containerWall');

  const mainWall = document.createElement('section');
  mainWall.className = 'mainWall';

  const header = document.createElement('header');
  header.className = 'headerWall';

  // onGetData((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     const textPost = document.createElement("p");
  //     textPost.className = "publishPost";
  //     textPost.textContent = doc.data().post;
  //     containerPost.appendChild(textPost);
  //   });
  // })

  const containerPost = document.createElement("article");
  containerPost.className = 'containerPost';


  getDocs(collection(dataFirestore, "PostWall"))
    .then((snapshot) => {
      snapshot.forEach(doc => {
        const textPost = document.createElement("p");
        const imageLike = document.createElement("img");
        textPost.className = "publishPost";
        textPost.textContent = doc.data().post;
        imageLike.src = './img/iconomegusta.png';
        imageLike.alt = 'Like';
        imageLike.className = 'imageLike';

        containerPost.append(textPost, imageLike);
      })
    });

  const imageWall = document.createElement('img');
  imageWall.src = './img/Logo-red-social.png';
  imageWall.alt = 'Imagen logo Travelers';
  imageWall.className = 'logoWall';


  const userNameProfile = document.createElement('h1');
  userNameProfile.className = 'nameUser';
  userNameProfile.textContent = window.user!=undefined?window.user.displayName:"";


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
    loginOut().then(() => {
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

  // imageLike.addEventListener('click', () => {
  //   alert("diste like");
    // // Sum the count of each shard in the subcollection
    // return ref.collection('PostWall'),
    // get().then((snapshot) => {
    //     let total_count = 0;
    //     snapshot.forEach((doc) => {
    //         total_count += doc.data().count;
    //     });
    //     return total_count;
    // });
  // })

  header.append(imageWall, userNameProfile, buttonClose);
  container.append(header, messageText, errorText, buttonPublish, containerPost);
  divButtonBack.append(imageBack, textBackButton);
  buttonClose.appendChild(divButtonBack);
  mainWall.append(header, container);


 
  return mainWall;
};



