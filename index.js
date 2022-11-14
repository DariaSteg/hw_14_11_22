// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for
 
 
 
 const MIN_NUMBER = 15;
 const MAX_NUMBER = 35;
 const MULTIPLE =6;
 const COUNT =3;


  for (let i=0;i<3; i++) {
    const result = prompt(Number("enter number"));
    if (result >= MIN_NUMBER && result <=MAX_NUMBER && result %MULTIPLE === 0) {
      console.log("ok");
      break;
   }
    if (i === 3) {
      console.log("sorry,lets try again");
    }
  }


  let count = 0;
  while (true) {
   const result = prompt(Number("enter number"));
    count++;
    if (result >= MIN_NUMBER && result <=MAX_NUMBER && result %MULTIPLE === 0) {
     console.log("ok");
     break;
    }
    if (count === 3) {
      console.log("sorry,lets try again");
      break;
    }
  }






// * це повинна бути функція(можливо і не одна)

const countNumber = function (checkNumber) {
  for (let i=0;i<COUNT; i++) {
        const checkNumber = prompt(Number("enter number"));
        if (checkNumber >= MIN_NUMBER && checkNumber <=MAX_NUMBER && checkNumber % MULTIPLE === 0) {
          console.log("ok");
          break;
       }
        if (i === COUNT) {
          console.log("sorry,lets try again");
        }
      }
     
  }
  console.log(countNumber());






  