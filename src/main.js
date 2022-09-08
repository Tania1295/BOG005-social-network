import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { wall } from './components/wall.js';

const rootSection = document.getElementById('root');

const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
  '/wall': wall,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootSection.removeChild(rootSection.firstChild);
  rootSection.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootSection.removeChild(rootSection.firstChild);
  rootSection.append(component());
};

rootSection.appendChild(component());
