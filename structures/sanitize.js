const sanitize = (value) => {
    if (typeof value === 'string') {
            return value?.replace(/(\r\n|\n|\t)/gm, "");
    } else {
            return value;
    }

}

module.exports = {
    sanitize: sanitize
}

