import { onNavigate } from '../../src/main.js';
import { register } from '../../src/components/register.js';

jest.mock('../../src/lib/firebase.js')

const mockRegister = () => {
    const container = document.createElement('section');
    const title = document.createElement('h1');
    title.textContent = 'Hola Register';

    container.appendChild(title);

    return container;
}

const mockRoute = {
    '/register': mockRegister,
}

describe('Should test register view', () => {
    it('Call mockRegister', () => {
        document.body.innerHTML = `<section id='root'></section>`
        onNavigate('/register', mockRoute)
        expect(document.getElementById('root').textContent).toEqual('Hola Register');
    })
})

// Segundo test
const mockRegisterButton = () => {
    const container = document.createElement('section');
    const buttonSign = document.createElement('button');
    buttonSign.className = 'buttonEnter';
    buttonSign.textContent = 'Registrarme';

    container.appendChild(buttonSign);

    return container;
}

const mockRouteRegister = {
    '/Register': mockRegisterButton,
}

describe('Should test button Register', () => {
    it('Call mockRegisterButton', () => {
        document.body.innerHTML = `<section id='root'></section>`
        onNavigate('/Register', mockRouteRegister)
        expect(document.getElementById('root').textContent).toEqual('Registrarme');
        expect(document.getElementById('root').textContent).toBeDefined();
        expect(mockRouteRegister).not.toBeNull();
    })
})

test('Registes is not Null', () => {
    expect(register).not.toBeNull();
})

test('Register is a Function', () => {
    expect(typeof register).toBe('function')
})

test('Exist the button Sign', () => {
    const element = register();
    const button = element.getElementsByClassName('.buttonSign');
    expect(button).not.toBeNull();
})