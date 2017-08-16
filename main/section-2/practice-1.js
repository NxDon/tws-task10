'use strict';

function inResult(elem, array) {
    return array.some((obj) => {
        return obj.key === elem;
    })
}

function addOne(elem, result) {
    result.forEach((obj) => {
        if (obj.key === elem) {
            obj.count++;
        }
    })
}

function addNewKey(array, elem) {
    array.push({key: elem, count: 1});
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach((elem) => {
        if (inResult(elem, result)) {
            addOne(elem, result);
        } else {
            addNewKey(result, elem);
        }
    });
    return result;
};
