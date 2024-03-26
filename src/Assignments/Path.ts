
import * as path from "path";
import { EventEmitter } from 'events';


// console.log("Path > ", __filename);

// console.log("Base name : " , path.basename(__filename));
// console.log("Dir name : " , path.dirname(__dirname));


// console.log("ex filename : " , path.extname(__filename));
// console.log("ex Dir name : " , path.extname(__dirname));

// console.log("parse filename : " , path.parse(__filename));
// console.log("parse Dir name : " , path.format(path.parse(__dirname)));

// console.log("absol Dir name : " , path.isAbsolute(__filename));


// console.log("Base name : " , path.basename(__filename));


const myEmitter: EventEmitter = new EventEmitter();

myEmitter.on("order-pizza",(rate, location)=>{
    console.log(`Order recived ${rate}! Backing a pizza ${location}`);
    
});

myEmitter.on("order-dispatch",()=>{
    console.log('Recived, order Dispatched');
    
});

myEmitter.emit("order-pizza","100","Pattambi")
// myEmitter.emit("order-dispatch")