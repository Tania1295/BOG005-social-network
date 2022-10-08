import { onNavigate } from '../main.js';
import { loginOut, onGetData, savePost, deletePost, getEdit, updtateEdit } from '../lib/firebase.js';

export const wall = () => {
  const container = document.createElement('section');
  container.setAttribute('id', 'containerWall');

  const mainWall = document.createElement('section');
  mainWall.className = 'mainWall';

  const header = document.createElement('header');
  header.className = 'headerWall';

  const containerPost = document.createElement('article');
  containerPost.className = 'containerPost';
  
  const sectionPost = document.createElement('div');
  sectionPost.className = 'sectionPost';

  // Sección de los post
  let editStatus = false;
  let id = '';

  onGetData((querySnapshot) => {
    sectionPost.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const textPost = document.createElement('p');
      textPost.className = 'publishPost';
      textPost.textContent = doc.data().post;
      // Like
      const imageLike = document.createElement('img');
      imageLike.src = './img/corazon.png';
      imageLike.alt = 'Like';
      imageLike.className = 'imageLike';
      imageLike.setAttribute('data', doc.id);
      imageLike.setAttribute('like', doc.data().like);
      if (doc.data().like == true) {
        imageLike.style.backgroundColor = 'tomato';
      }
      // Eliminar
      const btnDelete = document.createElement('button');
      btnDelete.textContent = 'Eliminar';
      btnDelete.setAttribute('data-id', doc.id);
      btnDelete.className = 'btnDelete';
      // Editar
      const btnEdit = document.createElement('button');
      btnEdit.textContent = 'Editar';
      btnEdit.setAttribute('data-id', doc.id);
      btnEdit.className = 'btnEdit';

      sectionPost.append(textPost, imageLike, btnDelete, btnEdit);
      

      // Borrar post
      btnDelete.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
      })

      // Editar post
      btnEdit.addEventListener('click', e => {
        getEdit(e.target.dataset.id);
        const post = doc.data();

        messageText.value = post.post;

        editStatus = true;  // para saber si esta actualizando el post.
        id = doc.id;
      });

      // Dar like al post
      const btnsLike = containerPost.querySelectorAll('.imageLike');
      btnsLike.forEach(btn => {
        btn.addEventListener('click', (event) => {
          const id = event.target.attributes.data.value;
          const like = event.target.attributes.like.value == 'true' ? false : true;
          updtateEdit(id, { like: like });
        })
      });
    });
  })

  const imageWall = document.createElement('img');
  imageWall.src = './img/Logo-red-social.png';
  imageWall.alt = 'Imagen logo Travelers';
  imageWall.className = 'logoWall';

  const userNameProfile = document.createElement('h1');
  userNameProfile.className = 'nameUser';
  userNameProfile.textContent = window.user != undefined ? window.user.displayName : '';

  const buttonClose = document.createElement('button');
  buttonClose.className = 'buttonClose';
  const divButtonBack = document.createElement('div');
  divButtonBack.className = 'divButtonBack';
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
  messageText.setAttribute('id', 'messagePost');

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

  buttonPublish.addEventListener('click', () => {
    const post = messageText.value;
    console.log(post);
    // Condicional para actualizar y guardar un post.
    if (!editStatus) {
      savePost(post);

    } else {
      updtateEdit(id, {
        post
      }),

        editStatus = false;
    }
    messageText.value = '';
  });

  header.append(imageWall, userNameProfile, buttonClose);
  container.append(header, containerPost);
  containerPost.append(messageText, errorText, buttonPublish, sectionPost);
  divButtonBack.append(imageBack, textBackButton);
  buttonClose.appendChild(divButtonBack);
  mainWall.append(header, container);

  return mainWall;
};
