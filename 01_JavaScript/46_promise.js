/*
let simranPromise = new Promise((resolve, reject) => {
    let parentsDecisions = true;

    if(parentsDecisions) {
        resolve("Yeyy, Ab shaadi hogi");
    }
    else {
        reject("Ohh, Shadi nhi ho payegi");
    }
});

simranPromise.then((msg) => {
    console.log("Simran Message: " + msg);
    console.log("Let's look the wedding venue.");
}).catch((msg) => {
    console.log("Simran Message: " + msg);
    console.log("Apna dekh lo.");
}).finally(() => {
    console.log("Pdhai kro ache se");
});
*/



/*
let simranPromise = new Promise((resolve, reject) => {
    let parentsDecisions = false;

    if(parentsDecisions) {
        resolve({msg: "Yeyy, Ab shaadi hogi", val: parentsDecisions});
    }
    else {
        reject({msg: "Ohh, Shadi nhi ho payegi", val: parentsDecisions});
    }
});

simranPromise.then((res) => {
    console.log("Simran Message: " + res.msg);
    console.log("Parents Decision: " + res.val);
    console.log("Let's look the wedding venue.");
}).catch((res) => {
    console.log("Simran Message: " + res.msg);
    console.log("Parents Decision: " + res.val);
    console.log("Apna dekh lo.");
}).finally(() => {
    console.log("Pdhai kro ache se");
});
*/



const f1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve("Hey, I am ready for Goa.");
        } else {
            reject("F1: Sorry, Mujhe Pdhai krni hai.")
        }
    }, 2000)
});

const f2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve("Hey, I am ready for Goa.");
        } else {
            reject("F2: Sorry, Gharwale mna kr diye.")
        }
    }, 2000)
});

const f3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve("Hey, I am ready for Goa.");
        } else {
            reject("F3: Sorry, Meri tabiyat kharab hai.")
        }
    }, 2000)
});

Promise.all([f1Promise, f2Promise, f3Promise])
.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
}).finally(() => {
    console.log("Padho");
});


// Promise.any([f1Promise, f2Promise, f3Promise])
// .then((msg) => {
//     console.log(msg);
// }).catch((msg) => {
//     console.log(msg);
// }).finally(() => {
//     console.log("Padho");
// });
