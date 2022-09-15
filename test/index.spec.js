// importamos la funcion que vamos a testear
// import { register} from '../src/components/register.js';
// import { auth, createUserWithEmailAndPassword } from '../src/lib/firebase.js';


// jest.mock('../src/lib/firebase.js', () => {
//   return {
//     auth: jest.fn(() => {  // función jest.fn crea una función para jest (es de Jest)
//       return { auth: 'TEST' }
//     }),

//     createUserWithEmailAndPassword: jest.fn((email, password) => {
//       if (!email || !password) {
//         throw new Error('ERROR');
//       }
//       return Promise.resolve({ user: 'admin' });
//     }),

//   }
// })

// describe('Test for the register function', () => {
//   const email = 'admin@test.com';
//   const pass = 'admin456';

//   it('Should call createUserWithEmailAndPassword', async () => {
//     register(email, pass);// se revisa la ejecución de register
//     expect(createUserWithEmailAndPassword).toHaveBeenCalled();
//   });

//   it('Should call createUserWithEmailAndPassword with the auth, email, and pass arguments', async () => {
//     register(email, pass);// se ejecuta register con argumentos
//     expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
//   });
//   it('Should throw an error if executed without arguments', async () => {
//     try {
//       register();
//     } catch (error) {
//       expect(error).toMatch('ERROR');
//     }
//   });
// });

