export const welcome = () => { 
  
const rootDiv = document.getElementById("root");
rootDiv.innerHTML = `<h1>Bienvenid@</h1> <a id = "login" href="#login">Ingresar</a>`;

let buttonLogin = document.getElementById("login");
buttonLogin.addEventListener("hashchange", loginFunction);

function loginFunction(){
 
    const pathname = window.location.pathname;
    rootDiv.innerHTML = routes[pathname];
    rootDiv.innerHTML = "";

// const linkContent = {
//     "#welcome": welcome,
//     "#loginEmail": loginEmail,
// };

const routes = {
"/login" : login,
};
const changeRoute = (hash) => {
    if (hash === "#login") {
        window.history.replaceState({}, "login", "/");
    }};
// const pathname = window.location.pathname;
// rootDiv.innerHTML = routes[pathname];

// const changeRoute = (hash) => {
//     if (hash === "#welcome") {
//         window.history.replaceState({}, "welcome", "/");
//     } else if (hash === "loginEmail"){
//         window.history.replaceState({}, "loginEmail", "/login");
//     }
// }
}
};
