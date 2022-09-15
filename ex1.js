function counter(length){
    const obj = {};

    for (let i = 0; i < length; i++) {
        const num = Math.floor(Math.random()*(8 - 3)) + 3;
        if (obj[num]){
          obj[num] += 1;
        }
        else {
          obj[num] = 1;
        }
    }
                   
    return obj;
}

console.log(counter(10000000));