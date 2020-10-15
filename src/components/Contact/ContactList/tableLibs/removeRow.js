
const remove = (dataDelete, selectedRow) => {
    const names = [];
    const deleted = [];
    for (const item of selectedRow) {
        names.push(item.name);
    }
    for (let i = 0; i < dataDelete.length; ) {
        if (names.includes(dataDelete[i].name)) {
            deleted.push(dataDelete.splice(i, 1));
            continue;
        }
        i++;
    }
    return dataDelete, deleted;
}

export default remove;