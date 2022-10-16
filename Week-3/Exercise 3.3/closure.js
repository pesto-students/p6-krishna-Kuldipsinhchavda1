function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }
    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?


//Loogged output is Count is 0 because message is outside the increment block and it's execute only first time that's why output is count is 0.