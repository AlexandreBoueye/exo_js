const helloWorld = require ('./helloworld');

discribe ('Hello World', fonction() {
    test('Says "Hello, Wolrd!"',fonction(){
        expect(helloWorld()).toEqual('Hello, World!');
    });
});
