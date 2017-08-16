'use strict';


function flatten(array) {
    return array.join(',').split(',');
}

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter((elem) => {
        return flatten(collectionB).includes(elem);
    });
}
