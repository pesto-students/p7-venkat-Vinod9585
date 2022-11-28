const { create } = require("lodash");

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
    //console.log("count1 : " + count);
  }
  let message = `Count is ${count}`;
  //console.log(message);
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();

//-------------------------------------------------------------------------//

// What is logged?

// The function will print 'Count is 0', because when
//declaring "const [increment, log] = createIncrement();""
//create.createIncrement() gets executed and while executing
//count set to 0 and message is set to 'Count is 0' and after that
// value of message never get changed , that's why 'Count is 0'
// is the message.
