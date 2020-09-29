function FindDiff(newData,oldData,count){
    console.table(newData);
    console.table(oldData);
    for (let key of Object.keys(newData)) {
        if(newData[key] !== oldData[key]){
            count +=1;
        }
    }
    console.log(count);
    return count;
}

export default FindDiff;