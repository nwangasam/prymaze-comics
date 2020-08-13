const bioData = {
  fullname: 'Nwanguma Samuel',
  email: 'samuel.nwanguma.g20@gmail.com',
  username: 'nwangasam2020',
  dateOfBirth: '02-02-2000',
  website: 'https://nwangasam.comd',
  streetAddress: 'No 7, Odunna Cresent, Imo, Nigeria.',
};

// Validators using regex
const isFullname = (value) => /[\w.]{2,}/gim.test(value);

const isEmail = (value) => /(^[\w-\.]+)@([\w-\.])+[\w-]{2,3}/gim.test(value);

const isUsername = (value) => /[\w\d]+/gim.test(value);

const isDateOfBirth = (value) => /(([\d]){2}[-]){2}((\d){4})/gim.test(value);

const isWebsite = (value) =>
  /(http|https):[\/\/]{2,}[\w-.]{1,}[\.]([\w-.]){2,}/gim.test(value);

const isStreetAddress = (value) =>
  /^No\s\d[,]((\s|.)([\w- .]+[,])){2,}(\s|.)[\w .]+\.$/gim.test(value);

// Validate Bio Data
const validateBioData = (bioData) =>
  isFullname(bioData.fullname) &&
  isEmail(bioData.email) &&
  isUsername(bioData.username) &&
  isDateOfBirth(bioData.dateOfBirth) &&
  isWebsite(bioData.website) &&
  isStreetAddress(bioData.streetAddress);

console.log(
  validateBioData(bioData),
  !validateBioData ? 'validation failed! :(' : 'validation successfull! :)'
);

// Enjoy :) | Genesys - Learnable2020 backend task.
