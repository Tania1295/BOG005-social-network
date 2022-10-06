import { onNavigate } from "../../src/main.js";
import { welcome } from "../../src/components/welcome.js";
import { popUp } from "../../src/lib/firebase.js";

jest.mock('../../src/lib/firebase.js')

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

// Segundo test
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

// Tercer test
test('Exist the button Sign Up', () => {
    const element = welcome();
    const button = element.querySelector('.buttonSignUp');
    expect(button).not.toBeNull()
})

// Cuarto test
describe('welcome', () => {
    it('Check sign in with Google button', () => {
        const page = welcome();
        const buttonLoginGoogle = page.querySelector('#buttonGoogle');
        //buttonLoginGoogle.addEventListener(new Event('click'));
        buttonLoginGoogle.click();
        expect(popUp).toBeCalled();
    });
});
