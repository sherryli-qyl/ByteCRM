function InputValidation(text) {
  const checkInput = text.replaceAll(' ', '').replaceAll('<br>', '').replaceAll('<p></p>', '');
  if (checkInput !== '') {
    return true;
  }
  return false;
}

export default InputValidation;
