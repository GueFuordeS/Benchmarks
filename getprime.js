function prime(num) {
    if(num < 2) 
        return false;
    if(num == 2)
        return true;
    if(num%2 == 0)
        return false;

    var i;
    for(i = 3; i<num; i += 2) {
        if(num%i == 0)
            return false;
    }
    
    return true;
}

function yieldprime(target) {
    var count = 1;
    var primes = 2;
    while(true) {
        if(count == target)
            return primes;
        primes += 1;
        if(prime(primes))
            count++;
    }
}

console.time('time taked');
console.log(yieldprime(parseInt(process.argv[2])));
console.timeEnd('time taked');