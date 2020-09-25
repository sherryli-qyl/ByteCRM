function dataInfo(key,title,value,tip) {
    this.key = key;
    this.title = title;
    this.value = value; 
    this.tip = tip; 
}

function FormatData(dataPack,dictionary){
    const dataInfoArray=[];
    for (let i in dictionary){
        const value = dataPack[dictionary[i].key]; 
        const item = new dataInfo( dictionary[i].key,dictionary[i].title,value,dictionary[i].tip);
        dataInfoArray.push(item); 
    }
    return dataInfoArray;
}

export default FormatData;