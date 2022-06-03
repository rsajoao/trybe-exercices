// const sleep = (sleepDuration) => {
//     const now = new Date().getTime();
//     while (new Date().getTime() < now + sleepDuration);
// };

// callbacks
// then e catch
// Async/Await
// Promises

const prepareBigMac = (nextLaunch) => {
    setTimeout(() => {
        console.log(`1 - BigMac`);
        nextLaunch();
    }, Math.random() * 2000);
};

const prepareMilkShake = (nextLaunch) => {
    setTimeout(() => {
        console.log(`2 - Milk Shake`);
        nextLaunch();
    }, Math.random() * 2000);
};

const prepareOtherLaunch = () => {
    setTimeout(() => {
        console.log(`3 - Other Launch`);
    }, Math.random() * 2000);
};

console.log(`INÍCIO`);
prepareBigMac(() => { 
    prepareMilkShake(prepareOtherLaunch);
});
console.log(`FIM`);
