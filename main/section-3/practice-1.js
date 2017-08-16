'use strict';

function inObject(elem, objectB) {
    return objectB.value.some((el) => {
        return el === elem.key;
    })
}

function minusOneFromObj(elem) {
    return {
        key: elem.key,
        count: elem.count - 1
    }
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map((elem) => {
        if (inObject(elem, objectB)) {
            return minusOneFromObj(elem);
        } else {
            return elem;
        }
    });
};
