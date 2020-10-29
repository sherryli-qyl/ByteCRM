function dataInfo(key, title, value, tip) {
    this.key = key;
    this.title = title;
    this.value = value;
    this.tip = tip;
}

function FormatData(dataPack, dictionary) {
    const dataInfoArray = [];
    for (const i in dictionary) {
        const value = dataPack[dictionary[i].key];
        let item;
        if (typeof value === 'object') {
            item = new dataInfo(dictionary[i].key, dictionary[i].title, value.fullName, dictionary[i].tip);
        } else {
            item = new dataInfo(dictionary[i].key, dictionary[i].title, value, dictionary[i].tip);
        }
        dataInfoArray.push(item);
    }
    return dataInfoArray;
}

export default FormatData;
