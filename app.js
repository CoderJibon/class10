// # Create an email pattern

let mail = 'contact.engjibon@gmail.com';
let pattern = /^[a-z0-9._]*@[a-z]{2,}\.[a-z]{2,5}$/;
console.log("E-mail = " + pattern.test(mail));

// # Create a  username pattern
let userName = 'coderjibon';
let patternUser = /^[a-z0-9._]{3,}$/;
console.log("userName = " + patternUser.test(userName));

// # Create a Bangladeshi phone number pattern

let phone = '+8801985868068';
let patternPhone = /^(\+8801|01)[0-9]{9}$/;
console.log("Phone = " + patternPhone.test(phone));

// # Create a password pattern
let password = "_hW7@EY#";
let patternletPass = /^[a-zA-Z0-9-_\.@#$%]{8,}$/;
console.log("password = " + patternletPass.test(password));


// # Create a zipcode pattern
let zipcode = "1268";
let patternZipcode = /^[0-9]{3,}$/;
console.log("zipcode = " + patternZipcode.test(zipcode));

