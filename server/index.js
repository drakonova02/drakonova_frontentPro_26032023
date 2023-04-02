function removeElement(array, item) {
    if(!Array.isArray(array)) {
        throw new Error('First paremetr not array');
    } else {
        while(array.includes(item)) {
            array.splice(array.indexOf(item), 1);
        }
    }
}

module.exports = removeElement