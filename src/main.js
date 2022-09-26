import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { wall } from './components/wall.js';

const rootSection = document.getElementById('root');

const routes = {
  '/': welcome(),
  '/login': login(),
  '/register': register(),
  '/wall': wall(),
};
const onNavigate = (pathname, paramRoutes = routes) => {
  const rootSection = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  // rootSection.removeChild(rootSection.firstChild);
  rootSection.replaceChildren(paramRoutes[pathname]);
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootSection.removeChild(rootSection.firstChild);
  rootSection.append(component);
};

window.addEventListener("load", ()=> {
  onNavigate(window.location.pathname)
})
 rootSection.appendChild(component);

export {onNavigate};
