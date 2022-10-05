import { onNavigate } from '../main.js';
import { loginOut, onGetData, savePost, deletePost, getEdit, updtateEdit } from '../lib/firebase.js';


export const wall = () => {
  const container = document.createElement('section');
  container.setAttribute('id', 'containerWall');

  const mainWall = document.createElement('section');
  mainWall.className = 'mainWall';

  const header = document.createElement('header');
  header.className = 'headerWall';
  
  const containerPost = document.createElement("article");
  containerPost.className = 'containerPost';

  let editStatus = false;
  let id = ""; 

  onGetData((querySnapshot) => {
    
    containerPost.innerHTML = ""; 

    querySnapshot.forEach((doc) => {
      const textPost = document.createElement("p");
      textPost.className = "publishPost";
      textPost.textContent = doc.data().post;

      const imageLike = document.createElement("img");
      imageLike.src = './img/iconomegusta.png';
      imageLike.alt = 'Like';
      imageLike.className = 'imageLike';

      const btnDelete = document.createElement("button");
      btnDelete.textContent = "Eliminar";
      btnDelete.setAttribute("data-id", doc.id);
      btnDelete.className = "btnDelete" ;

      const btnEdit = document.createElement("button");
      btnEdit.textContent = "Editar";
      btnEdit.setAttribute("data-id", doc.id);
      btnEdit.className = "btnEdit" ;

      containerPost.append(textPost, imageLike, btnDelete, btnEdit);

  
      // Borrar post
      btnDelete.addEventListener('click', ({target: {dataset}}) => {
        deletePost(dataset.id);
      })


      // Editar post
      btnEdit.addEventListener('click', e =>{
        getEdit(e.target.dataset.id);
        const post = doc.data();

        messageText.value = post.post;

        editStatus = true;  // para saber si esta actualizando el post.
        id = doc.id;
        // buttonPublish.innerText = 'Actualizar';

      });

       // Dar like al post
      imageLike.addEventListener('click', () =>{
        alert("Diste like");
      });

    });
  })


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

  
  buttonPublish.addEventListener("click", () => {
    const post = messageText.value;
    console.log(post);
    // condicional para actualizar y guardar un post.
    if (!editStatus) {
      savePost(post);
       
    } else{
      updtateEdit(id, {
        post}),

      editStatus = false;
    }

    
    
  });


  header.append(imageWall, userNameProfile, buttonClose);
  container.append(header, messageText, errorText, buttonPublish, containerPost);
  divButtonBack.append(imageBack, textBackButton);
  buttonClose.appendChild(divButtonBack);
  mainWall.append(header, container);


 
  return mainWall;
};



