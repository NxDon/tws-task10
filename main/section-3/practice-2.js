'use strict';

function inObject(elem, objectB) {
    return objectB.value.some((el) => {
        return el === elem.key;
    })
}

function minusFromObj(elem) {
    let newCount = elem.count - Math.floor(elem.count/3);
    return {
        key: elem.key,
        count: newCount
    }
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map((elem) => {
        if (inObject(elem, objectB)) {
            return minusFromObj(elem);
        } else {
            return elem;
        }
    });
};
