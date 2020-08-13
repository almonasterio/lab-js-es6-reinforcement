// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
const usersArray=require('./data')
const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName);
  }
  // console.log(userFirstNames)
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const result=[];
  for (let user of arr){
    result.push(`${user.firstName} ${user.lastName}`)
  }
  // console.log(result)
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
  const result=[];
  for (user of arr){
    const {firstName,lastName,balance}=user;
    const userDetails={firstName,lastName,balance}
    result.push(userDetails);
  }
  // console.log(result)
};

getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  // Your code goes here ...
const resultMale = users.filter(e => e.gender == 'male').map(e => `${e.firstName} ${e.lastName}`)
const resultFemale = users.filter(e => e.gender == 'female').map(e => `${e.firstName} ${e.lastName}`)
// console.log(resultMale)
return {males:resultMale,females:resultFemale}
};

genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  // console.log("females: ", data.females.length)
  //   console.log("males: ", data.males.length)
  // Your code goes here ...
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  let users20=users.map(el=>{
      return {firstName: el.firstName,balance: el.balance.substring(1, el.balance.length-3).split(',').join("")}
        
  }).filter(e=>e.balance.toString()>20000)
  console.log(users20)
  users20.forEach(e=>{
    console.log(`Dear ${e.firstName}, since your balance is ${e.balance}, you are eligible to apply for this awesome credit card.`)
  })
};
promo20(usersArray)
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {

  for(user of users){
    user["isActive"]=true;
  }
console.log(users)
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
