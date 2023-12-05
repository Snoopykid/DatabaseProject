function wait(sec) {
    return new Promise((resove, reject) => {
        setTimeout(() => {
            reject('throw Error!');
        }, sec * 1000);
    });
}

async function myAsyncFunc() {
    console.log(new Date());
    try {
        await wait(2); // Promise 를 기다리는 중
    } catch (e) {
        console.error(e);
    }
    console.log(new Date());
}

const result = myAsyncFunc();