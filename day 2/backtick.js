function readNumber() {
    let num;
  
    do {
      num = 3;
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  console.log('Read:' +readNumber());