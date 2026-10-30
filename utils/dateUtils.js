// utils/dateUtils.js

// 1. Base formatting helper
function formatDate(date) {
    const year = date.getFullYear(); //gives full year in the form of 2004 etc.
    const month = String(date.getMonth() + 1).padStart(2, '0');
    // getMonth() starts indexing from 0 therefore add 1, 
    // padStart() makes sure the string length is atleast 2.
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 2. Get current date formatted
function getCurrentDate() {
    return formatDate(new Date());
}

// 3. Get future date by adding X days (default is 30)
function getFutureDate(daysToAdd = 30) {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd); // Adds days natively
    return formatDate(date);
}

export { formatDate, getCurrentDate, getFutureDate };

// //sets and returns date format to yyyy-mm-dd
// function formatDate(unformattedDate){
//     let year = unformattedDate.getFullYear();  //gives full year in the form of 2004 etc.
//     let month = String(unformattedDate.getMonth()+1).padStart(2,'0')  
//     // getMonth() starts indexing from 0 therefore add 1, 
//     // padStart() makes sure the string length is atleast 2.
//     let date = String(unformattedDate.getDate()).padStart(2,'0')
//     return `${year}-${month}-${date}`
// }

// export {formatDate}