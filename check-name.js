function checkName(nam) {
    if (typeof nam !== 'string') {
        return 'please input valid name'
    }
    else {
        const low = nam.toLowerCase();
        const slices = low.slice(-1);

        if (slices === 'a' || slices === 'e' || slices === 'i' || slices === 'o' || slices === 'u' || slices === 'w' || slices === 'y') {
            return 'good name';
        }
        else{
            return 'bad name';
        }
    }
}


console.log(checkName('heLLoA'));
console.log(checkName('shimul'));
console.log(checkName(34));
