const loginContent = `<h2>Aqui pon tu correo</h2> 
<a id="signIn" href="#signIn">Iniciar Sesion</a>
<a href="#welcome">Regresar</a>`;


const signUpContent = `<h3>completa estos datos</h3> 
<a id="signUpEnter" href="#signInEnter">Iniciar Sesion</a> <a href="#welcome">Regresar</a>`;

export const welcome = () => {

    const rootSection = document.getElementById("root");
    rootSection.innerHTML = `<h1>Bienvenid@</h1> <a id="login" href="#login">Ingresar</a>
 <a id="loginGoogle" href="#loginGoogle">Ingresar con Google</a>
 <a id="signUp" href="#signUp">Registrate</a>
`;


    //cambiar HTML al clickear links href 
    window.onhashchange = () => {
        const hash = window.location.hash;
        console.log(hash)
        if (linkContent[hash] !== undefined) {
            rootSection.innerHTML = linkContent[hash]
            changeRoute(hash);
        } else if (hash !== "") {
            welcome();
        }
    };

    const linkContent = {
        "#login": loginContent,
        "#signUp": signUpContent,
    };
    //cambiar ruta en la URL para cambiar el numeral (esto es a mano, no quiere decir que sea valida la ruta)
     const changeRoute = (hash) => {
     window.history.replaceState({}, "", routesUrl[hash]);
    }

    const routesUrl = {
        "#login": "/login",
        "#signUp": "/signUp",
    };
    //mostrar el html correcto al cargar la pagina 
    const routes = {
        "/login": loginContent,
        "/signUp": signUpContent,
    };

    // const pathname = window.location.pathname;
    //rootSection.innerHTML = routes[pathname];


    //mostrar el HTML correcto al moverse atrás y adelante
     window.onpopstate = () => {
     const pathname = window.location.pathname;
    if (routes[pathname] !== undefined) {
     rootSection.innerHTML = routes[pathname];
     } else {
       welcome();
     }
 };
};

