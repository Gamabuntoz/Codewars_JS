function oddOrEven(array) {
    let summo = array[0];
    for (i=1; i<array.length; i++) {
        summo = summo + array[i];
    }
    if (summo%2 == 0 || array.length == 0) {
        return 'even'
    } else {
        return 'odd'
    }
}