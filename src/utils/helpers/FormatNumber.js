const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const phoneNumberInput = x => {
  return x.replace(/[^0-9]/g, '');
};

const nameFormat = x => {
  return x.replace(/^[a-zA-Z].*[\s\.]*$/g);
};

const emailChecker = x => {
  return x.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/);
};

export {numberWithCommas, phoneNumberInput, nameFormat, emailChecker};
