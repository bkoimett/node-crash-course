// global varibale

//console.log(global)

setTimeout(() => {
    console.log('Time is up!')
}, 3000);

const int = setInterval(() => {
  console.log(`Trial number ${Math.random()* 100}`);
}, 3000);