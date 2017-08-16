'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter((elem) => {
        return collectionB.includes(elem);
    })
};
