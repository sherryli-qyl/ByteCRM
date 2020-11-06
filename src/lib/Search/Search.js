import ListItem from './ListItem';

function FormatList(selectsList) {
  const formatedList = [];
  for (const i in selectsList) {
    const listItem = new ListItem(selectsList[i], true);
    formatedList.push(listItem);
  }
  return formatedList;
}

function SearchSelectsLocal(selectsList, textInput) {
  const searchList = [];
  for (const i in selectsList) {
    if (selectsList[i].fullName.toUpperCase().includes(textInput) || selectsList[i].email.toUpperCase().includes(textInput)) {
      const listItem = new ListItem(selectsList[i], true);
      searchList.push(listItem);
    }
  }
  return searchList;
}

function SearchSelectsRemote(searchList, textInput, selectsList) {
  const newSerachList = searchList;
  for (const i in selectsList) {
    if (selectsList[i].fullName.toUpperCase().includes(textInput) || selectsList[i].email.toUpperCase().includes(textInput)) {
      if (!checkDuplicate(newSerachList, selectsList[i])) {
        const listItem = new ListItem(selectsList[i], false);
        newSerachList.push(listItem);
      }
    }
  }
  return newSerachList;
}

function ItemSelected(selectList, id, checked) {
  const newList = selectList;
  for (const i in newList) {
    if (newList[i].selects.id === id) {
      newList[i].checked = checked;
    }
  }
  return newList;
}

function CheckOneSelects(selectsList, searchList) {
  let checkedCounter = 0;
  let contactId = '';
  for (const i in searchList) {
    if (searchList[i].checked === true) {
      checkedCounter += 1;
      contactId = searchList[i].selects.id;
    }
  }
  if (checkedCounter === 1 && selectsList.length > 1) {
    return false;
  }
  if (checkedCounter === 1 && selectsList[0].selects.id === contactId) {
    return contactId;
  }

  return false;
}

function checkDuplicate(selectsList, contact) {
  let duplicate = false;
  for (const i in selectsList) {
    if (selectsList[i].selects._id === contact._id) {
      duplicate = true;
      return duplicate;
    }
  }
  return duplicate;
}

export {
  FormatList, SearchSelectsLocal, SearchSelectsRemote, ItemSelected, CheckOneSelects,
};
