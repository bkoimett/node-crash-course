// global varibale

//console.log(global)

setTimeout(() => {
    console.log('Time is up!')
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
  console.log(`lotto number : ${(Math.floor(Math.random()* 100))}`);
}, 1000);