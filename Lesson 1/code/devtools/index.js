{
    function* countBackword(n) {
        while (n >= 0) {
            yield n--;
        }
        throw new Error();
    }

    console.time('Sample timer.');
    console.log('Sample message.');
    console.warn('Sample warning.');
    console.error('Sample error.');
    console.timeEnd();
    debugger;

    for (let no of countBackword(10)) {
        console.group(`iteration ${no}`);
        console.log(no);
        console.groupEnd();
    }
}