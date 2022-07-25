const companies = [
    {name: "Company Once", catecogy: "Finance", start: 1981, end: 2003},
    {name: "Company Two", catecogy: "Retail", start: 1992, end: 2008},
    {name: "Company Three", catecogy: "Auto", start: 1999, end: 2007},
    {name: "Company Four", catecogy: "Retail", start: 1989, end: 2010},
    {name: "Company Five", catecogy: "Technology", start: 2009, end: 2014},
    {name: "Company Six", catecogy: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", catecogy: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", catecogy: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", catecogy: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// };

// forEach

// companies.forEach(function(company) {
//     console.log(company);
// })

// filter

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age) {
//     if (age >= 21) {
//         return true;
//     }
// })

const canDrink = ages.filter(age  => age >= 21);
//console.log(canDrink);

// Filter retial companies

// const retailCompanies = companies.filter(function(company) {
//     if ( company.catecogy === 'Retail'){
//         return true;
//     }
// })

// console.log(retailCompanies);

const retailCompanies = companies.filter(company => company.catecogy === 'Retail');
//console.log(retailCompanies);

// Get 80s companies

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);
//console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

const lasted10YearsOrMore = companies.filter(company => (company.end - company.start >= 10));
//console.log(lasted10YearsOrMore);

// map
// Create array of company names

// const companyNames = companies.map(function(company){
//     return company.name;
// })

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// })

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2);
const agesMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

//console.log(agesMap);


// sort
// Sort companies by start year
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start){
        return 1;
    } else{
        return -1;
    }
})
const sortedCompaniesShort = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

// Sort ages
const sortAges = ages.sort((a, b) => a - b);
//console.log(sortAges);

// reduce

let ageSum = 0;
for(i = 0; i < ages.length; i++){
    ageSum += ages[i];
}

const ageSumTwo = ages.reduce(function(total, age){
    return total + age;
}, 0);
const agesSumThree = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);
}, 0)

const totalYearOne = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYearOne);