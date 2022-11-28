//1. Bind
function product(a, b) {
  return a * b;
}

// console.log(product(10, 20));

const doDouble = product.bind(null, 2);
console.log(doDouble(30));

//-----------------------------------------------------------------//

//2. Call
function academy() {
  var reply = [this.name, "is learning", this.subject].join(" ");
  console.log(reply);
}

var student = {
  name: "Vinod",
  subject: "JavaScript",
};

academy.call(student);

//-----------------------------------------------------------------//

//3. Apply
function greatest(numbers) {
  return "Greatest Number is : " + Math.max.apply(null, numbers);
}

console.log(greatest([10, 45, 89, 23, 99, 23, 44]));
