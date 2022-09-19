import { onNavigate } from "../src/main";

jest.mock('../src/lib/firebase.js')

const mockLogin = () => {
    const container = document.createElement('section');
    const title = document.createElement('h1');
    title.textContent = "Hola Login";

    container.appendChild(title);

    return container;
}

const mockRoute = {
    '/login': mockLogin(),
}


describe("Should test login", () => {
    it("Call mockLogin", () => {
        document.body.innerHTML=`<section id="root"></section>`
        onNavigate('/login', mockRoute)
        expect(document.getElementById('root').textContent).toEqual('Hola Login')
    })
})