function validate(arr) {
    if (!arr || arr.length === 0) {
        return { error: "Need at least one boolean" };
    }

    const isAllBooleans = arr.every(item => typeof item === 'boolean');
    if (!isAllBooleans) {
        return false;
    }

    const trueCount = arr.filter(item => item === true).length;
    const falseCount = arr.filter(item => item === false).length;


    return trueCount > falseCount;
}

module.exports = validate;