export const createUser = jest.fn(() => Promise.resolve());

export const loginUser = jest.fn(() => Promise.resolve());

export const popUp = jest.fn(() => Promise.resolve());

export const onGetData = jest.fn((callback) => {
    callback([{
        id: '123tvs',
        data: () => ({
            name: 'Traveles', uid: '24nd09bg09oi37tv', email: 'travelers@gmail.com', post: 'Hola, a Travelers',
        }),
    }]);
});
