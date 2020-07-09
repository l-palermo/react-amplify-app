export default jest.fn().mockImplementation((callback) => {
    const entries = [{ isIntersecting: true }, { isIntersecting: false }];
    callback(entries);
    return {
        observe: () => {},
        unobserve: () => {},
        disconnect: () => {},
    };
});
