const getNumber = () =>
    new Promise((resolve, reject) => {
        const randomNum = parseInt(Math.random() * 100, 10);

        setTimeout(() => {
            if (randomNum % 5 === 0) {
                reject(`Rejected with num:${randomNum}`);
            }
            resolve(`Resolve with num:${randomNum}`);
        }, randomNum * 10);
    });

getNumber().then(console.log).catch(console.log);

