'use strict';

function inResult(elem, array) {
    return array.some((obj) => {
        return obj.key === elem;
    })
}

function addCount(elem, count, result) {
    result.forEach((obj) => {
        if (obj.key === elem) {
            obj.count += count;
        }
    })
}

function addNewKey(array, count, elem) {
    array.push({key: elem, count: count});
}

function normalizeElem(elem) {
    let normalElem = elem.replace(/\[|\]|-|:/g, ",").split(",");
    return [normalElem[0], parseInt(normalElem[1]) || 1];
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach((elem) => {
        let [realElem, readNum] = normalizeElem(elem);
        if (inResult(realElem, result)) {
            addCount(realElem, readNum, result);
        } else {
            addNewKey(result, readNum, realElem);
        }
    });
    return result;
};
