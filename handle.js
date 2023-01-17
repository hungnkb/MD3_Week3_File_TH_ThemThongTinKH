const { fs } = require("fs");
const { resolve } = require("path");

const handle = {};
handle.getTemplate = async (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readfile(filepath, 'utf8', (err, data) => {
            if(err) {
                reject();
            } else {
                resolve(data);
            }
        })
    })
}

module.export {
    handle
}