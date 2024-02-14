try {
    let obj = undefined;
    console.log(obj.name);
} catch(err) {
    console.log("Exception Handled");
    // console.log(err);
} finally {
    console.log("Always execute");
}