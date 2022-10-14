const _ = {
    clamp(num, lower, upper) {
        if (num < upper && num > lower) {
            return num;
        } else if (num > upper) {
            return upper;
        } else if (num < lower) {
            return lower;
        };
    },
    inRange(num, start, end) {
        if (end) {
            if (start > end) {
                return num < start && num > end ? true : false;
            } else {
                return num >= start && num < end ? true : false;
            };
        } else {
            return num > 0 && num < start ? true : false;
        };
    },
    words (string) {

        const array = string.split(' ');
        return array;
    },
    pad (string, length) {
        if (string.length === length || string.length > length) {
            return string;
        };
        let newString = string;
        let padFront = Math.floor((length - string.length)/2);
        let padBack = length - string.length - padFront;
        while (padFront > 0) {
            newString = ' ' + newString;
            padFront--;
        };
        while (padBack > 0) {
            newString = newString + ' ';
            padBack--;
        };
        return newString;
    },
    has (obj, key) {
        return obj[key] ? true : false;
    },
    invert (obj) {
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        let newObj = {};
        for (i = 0; i < keys.length; i++) { 
            newObj[values[i]] = keys[i];
        }
        return newObj;
    },
    findKey (obj, func) {
        for (let key in obj) {
            if (func(obj[key])) {
                return key;
            }
            return undefined;
        };
    },
    drop (array, num) {
        let newArray = array;
        if (num) {
            for (let i = 1; i <= num; i++) {
                newArray.shift();
            };
        } else {
            newArray.shift();
        }
        return newArray;
    },
    dropWhile (array, func) {
        let newArray = array;
        for (let i = 0; i < array.length; i++) {
            let current = array[i]
            if (func(current), i, array) {
                newArray.shift();
            };
        };
        return newArray;
    },
    chunk (array, size) {
        newArrays = [];
        if (size === undefined) {
            size = 1;
        };
        for (let i = 0; i < array.length; i += size) {
            let newArray = [];
            newArray = array.slice(i, i + size);
            newArrays.push(newArray);
        };
        return newArrays;
    },
};




// Do not write or modify code below this line.
module.exports = _;