



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your age? ', (answer) => {
  // TODO: Log the answer in a database
  
  var age = parseInt(answer);
  computeAge(age,5);
  computeAge(age,20);
  computeAge(age,30);
  rl.close();
});

function computeAge(age,increment){
    
    var compute1 = age + increment;
    
    
if(compute1 < 15)
  console.log('After '+increment+' years: '+'I don\'t have to think about my life yet');


else if(compute1 >15 && compute1<30)
  console.log('After '+increment+' years: '+'I need to finish studies and find a job');


else if(compute1 >30 && compute1<35)
  console.log('After '+increment+' years: '+'I need to marry');


else if(compute1 >35 && compute1<40)
  console.log('After '+increment+' years: '+'I need to rear children');


else if(compute1 >=40 && compute1<=59)
  console.log('After '+increment+' years: '+'Prepare to retire');


else if(compute1 >=60)
  console.log('After '+increment+' years: '+'I will now retire');


}