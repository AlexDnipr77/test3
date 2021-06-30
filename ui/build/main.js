console.log('hello world');

console.log(window.location);

setTimeout(() => {
    console.log('timeout');
    // window.location.href = "/another"


    fetch('/another').then(async x => {
        console.log('fetched-----------------------------------------------------------');
        console.log(x);
        // console.log(x.text())

        let text = await x.text();
        console.log(text);
    })
}, 4000)