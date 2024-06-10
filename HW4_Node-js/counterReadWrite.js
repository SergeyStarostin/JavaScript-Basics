const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'counters.json');

function writeInfo(page, counter) {
    let data = {}
    data[page] = counter;
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

function readInfo(page) {
    if (fs.existsSync(filepath)) {
        const data = JSON.parse(
            fs.readFileSync(filepath, 'utf-8')
        );
        if (data[page]) {
            return data[page]
        }
        return 0;
    } else {
        writeInfo(page, 0);
    }
}

function changeInfo(page) {
    if (fs.existsSync(filepath)) {
        const data = JSON.parse(
            fs.readFileSync(filepath, 'utf-8')
        );
        if (data[page] && data.page !== 0) {
            data[page] += 1;
        } else {
            data[page] = 1
        }
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    } else {
        writeInfo(page, 1);
    }
}

module.exports = { changeInfo, readInfo}