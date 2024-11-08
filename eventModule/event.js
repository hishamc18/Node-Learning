// // // // // // event module example
// const EventEmitter = require('node:events');  //node venets returns a class which is for emitting and respond to emitted events
// const { emit } = require('node:process');

// const emitter = new EventEmitter(); //create an emitter object by instanciating the EventEmitter class


// //listeneing an event
// emitter.on('order-pizza', (size, toppings)=>{
//     console.log(`Order Sucess, Baking a ${size} Pizza with  ${toppings} toppings`);
// });

// console.log("Pizza Shop"); // this comes firssst, bcz handling events arre based on EDA, works based on non blocking code.

// //multiple listeners possible for same events
// emitter.on('order-pizza', (size)=>{
//     if(size == 'large'){
//         console.log("Serving Complementary Drink too with this");
//     }
// })

// emitter.emit('order-pizza', 'large', 'mushoom') // emitting an event with emit()













// // // // // // removeListener example
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// // Define a listener function
// function greetListener(name) {
//     console.log(`Hello, ${name}!`);
// }

// // Add the listener to the 'greet' event
// eventEmitter.on('greet', greetListener);

// // Emit the 'greet' event (listener is called)
// eventEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// // Remove the 'greet' listener
// eventEmitter.removeListener('greet', greetListener);

// // Try emitting 'greet' again (listener is no longer called)
// eventEmitter.emit('greet', 'Bob'); // No output














// // // // // removeAllListener Example
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define a listener function
function greetListener1(name) {
    console.log(`Hello, ${name}! (Listener 1)`);
}

function greetListener2(name) {
    console.log(`Hello, ${name}! (Listener 2)`);
}

// Add listeners to the 'greet' event
eventEmitter.on('greet', greetListener1);
eventEmitter.on('greet', greetListener2);

// Emit the 'greet' event
eventEmitter.emit('greet', 'Alice'); 
// Output:
// Hello, Alice! (Listener 1)
// Hello, Alice! (Listener 2)

// Remove all listeners for the 'greet' event
eventEmitter.removeAllListeners('greet');

// Try emitting 'greet' again (no output, as listeners are removed)
eventEmitter.emit('greet', 'Bob'); // No output