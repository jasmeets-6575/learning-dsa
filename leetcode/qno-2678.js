function seniorCitizens(details) {
   return details.map((item) => item.slice(11,13)).filter((item)=> item > 60).length
};

console.log(seniorCitizens(["7868190130M7522","5303914400F9211","9273338290F4010"]));