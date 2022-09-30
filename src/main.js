import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { wall } from './components/wall.js';

const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
  '/wall': wall,
};

const onNavigate = (pathname, paramRoutes = routes) => {
  const rootSection = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootSection.replaceChildren(paramRoutes[pathname]());
};

window.onpopstate = () => onNavigate(window.location.pathname);

window.addEventListener("load", () => onNavigate(window.location.pathname));

export { onNavigate };
