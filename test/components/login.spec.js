import { login } from "../../src/components/login.js";
import { onNavigate } from "../../src/main.js";

jest.mock('../../src/lib/firebase.js')

const mockLogin = () => {
    const container = document.createElement('section');
    const title = document.createElement('h1');
    title.textContent = "Hola Login";

    container.appendChild(title);

    return container;
}

const mockRoute = {
    '/login': mockLogin,
}

describe("Should test login view", () => {
    it("Call mockLogin", () => {
        document.body.innerHTML = `<section id="root"></section>`
        onNavigate('/login', mockRoute)
        expect(document.getElementById('root').textContent).toEqual('Hola Login')
    })
})

test('onNavigate is not Null', () => {
    expect(onNavigate).not.toBeNull();
})

test('onNavigate is a Function', () => {
    expect(typeof onNavigate).toBe('function')
})

test('Exist the button Enter', () => {
    const element = login();
    const button = element.getElementsByClassName('.buttonEnter');
    expect(button).not.toBeNull();
})