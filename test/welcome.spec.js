import { onNavigate } from "../src/main";

jest.mock('../src/lib/firebase.js')

const mockWelcome = () => {
    const container = document.createElement('section');
    const title = document.createElement('h1');
    title.textContent = "Hola Welcome";

    container.appendChild(title);

    return container;
}

const mockRoute = {
    '/': mockWelcome,
}

describe("Should test welcome view", () => {
    it("Call mockWelcome", () => {
        document.body.innerHTML = `<section id="root"></section>`
        onNavigate('/', mockRoute)
        expect(document.getElementById('root').textContent).toEqual('Hola Welcome')
    })
})

// Inicia segundo test
const mockWelcomeButton = () => {
    const container = document.createElement('section');
    const buttonLogin = document.createElement('button');
    buttonLogin.textContent = 'Ingresar con correo';
    buttonLogin.className = 'buttons';

    container.appendChild(buttonLogin);

    return container;
}

const mockRouteWelcome = {
    '/Login': mockWelcomeButton,
}

describe("Should test button Login", () => {
    it("Call mockWelcomeButton", () => {
        document.body.innerHTML = `<section id="root"></section>`
        onNavigate('/Login', mockRouteWelcome)
        expect(document.getElementById('root').textContent).toEqual('Ingresar con correo');
        expect(document.getElementById('root').textContent).toBeDefined();

    })
})
