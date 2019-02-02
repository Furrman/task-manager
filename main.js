import $ from 'jquery'

class HelloWorld {
    constructor() {
        $(document.body).append('<h1>Hello, world!</h1>');
    }
}

const helloWorld = new HelloWorld();