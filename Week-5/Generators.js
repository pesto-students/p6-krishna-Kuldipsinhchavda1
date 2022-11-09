async function doTask1() {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve("after 1 second")
        }, 1000);
    }))
}

async function doTask2() {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve("after 2 second")
        }, 2000);
    }))
}

async function* doTask3() {
    yield await new Promise((resolve => {
        setTimeout(() => {
            resolve("after 3 second")
        }, 3000);
    }))
}

async function doTask() {
    const f1 = await doTask1();
    console.log(`function 1 ${f1}`)
    const f2 = await doTask2();
    console.log(`function 2 ${f2}`)
    const f3 = doTask3();
    f3.next().then(({ value, done }) => {
        console.log(value);
    })
}

doTask();
