function dataInfo(key,title,value) {
    this.key = key;
    this.title = title;
    this.value = value; 
}

function FormatData(dataPack,dictionary){
    const dataInfoArray=[];
    for (let i in dictionary){
        const value = dataPack[dictionary[i].key];    
        const item = new dataInfo( dictionary[i].key,dictionary[i].title,value);
        dataInfoArray.push(item); 
    }
    console.table(dataInfoArray);
    return dataInfoArray;
}

export default FormatData;