export function isPrime(num) {
    if (num <= 1) { return false; }

    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Nur Zahlen der Form 6k ± 1 testen
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

export function countPrimes(max) {
    let count = 0;
    for (let num = 0; num <= max; num++) {
        if (isPrime(num)) ++count;
    }
    return count;
}

function countPrimeStep(currentCount, step, range, max, cb) {

    if ((step + 1) * range > max) {
        cb(currentCount);
        return;
    }

    let count = currentCount;
    for (let num = step * range + 1; num <= (step + 1) * range; num++) {
        if (isPrime(num)) ++count;
    }

    setTimeout(() => {
        countPrimeStep(count, step + 1, range, max, cb);
    })

}

export function countPrimesAsync(max, cb) {
    const range = 1000;
    const steps = max / range;

    countPrimeStep(0, 0, range, max, (count) => {
        cb(count);
    });
    /*
        for(let step = 0; step < steps; step++) {
            let current = step;
            setTimeout(() => {
                
    
                for (let num = current * range + 1; num <= (current+1)*range; num++) {
                    if(isPrime(num)) ++count;
                }
    
                // Last iteration?
                if (steps-current === 1) {
                    cb(count);
                }
            }, 0 );
        }
            */
}