import { wall } from "../../src/components/wall.js";
import { onGetData } from "../../src/lib/firebase.js";

jest.mock('../../src/lib/firebase.js')

test('onGetData is not Null', () => {
    expect(onGetData).not.toBeNull();
})

test('onGetData is a Function', () => {
    expect(typeof onGetData).toBe('function')
})

test('Exist the button Sign Up', () => {
    const element = wall();
    const button = element.getElementsByClassName('.buttonSignUp');
    expect(button).not.toBeNull();
})
