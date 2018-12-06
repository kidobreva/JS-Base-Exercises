// Some data you can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  // 1. Filter the list of inventors for those who were born in the 1500's
  // document.querySelector('button').addEventListener('click', (event) => {
  //   event.preventDefault();
  //   task1();
  // });
  let inventorList = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599)
  .map(el => `${el.first}  ${el.last} ${el.year}`).join(', ');

  // 2. Give us an array of the inventors' first and last names
    let inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`).join(', ');  
  
  // 3. Sort the inventors by birthdate, oldest to youngest
  let inventorsBirthdays = inventors.map(inventor => inventor.year).sort((a, b) => a - b).join(', ');

  // 4. How many years did all the inventors live?
  let inventorsLived = inventors.map(inventor => inventor.passed - inventor.year)
                                .reduce((acc, years) => acc + years, 0);      

  // 5. Sort the inventors by years lived
  let inventorsByYearsLived = inventors.map(inventor => {
    return inventor.passed - inventor.year
  }).join(', ');

  // 6. Sort the people alphabetically by last name
  let sortedByLasNames = inventors.map(name => name.last).sort().join(', ');

  // 7. Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  
  let vehicles = data.reduce((allVehicles, vehicle) => {
    if(allVehicles[vehicle]) {
      allVehicles[vehicle]++;
    } else {
      allVehicles[vehicle] = 1;
    }
    return allVehicles;
  }, {});
  let vehiclesArr = Object.keys(vehicles).map(el => `${el}: ${vehicles[el]}`).join(', ');

  //////////////////////////////////////
  const peoples = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // 8. Is at least one person 19 or older?
  let person = peoples.map(p => 2018 - p.year).some(p => p >= 19);
  
  // 9. Is everyone 19 or older?
  let person1 = peoples.map(p => 2018 - p.year).every(p => p >= 19);

  // 10. Find the comment with the ID of 823423
  let comment = comments.find(c => c.id === 823423);
  let commentArr = Object.keys(comment).map(el => `${el}: ${comment[el]}`).join(', ');

  // 11. Delete the comment with the ID of 823423
  let deletedComment = comments.splice(comments.findIndex(c => c.id === 823423), 1)[0];
  let deletedCommentArr = Object.keys(deletedComment).map(el => `${el}: ${deletedComment[el]}`).join(', ');

  let arr = [];
  arr.push(inventorList,
           inventorsNames, 
           inventorsBirthdays, 
           inventorsLived, 
           inventorsByYearsLived,
           sortedByLasNames,
           vehiclesArr,
           person,
           person1,
           commentArr,
           deletedCommentArr);

  function createTable (data, id) {
    let el = '<tbody>'
    for(var i = 0; i < data.length; i++){
      el+= '<tr>';
      el+= '<td>' + 'Task' + (i + 1) + '</td>';
      el+= '<td>' + data[i] + '</td>';
      el+= '</tr>';
    }
    el+='</tbody>';
    document.getElementById(id).innerHTML = el;
  }

  createTable(arr, 'tableData');
  
  // Bonus algorithms:
  
  // 12. Write a function to reverse a string
          //reverseStr('hello') => 'olleh'
    
    
    let resultField = document.querySelector('span.result');
    
    // function reverseString1(str) {
    //   const result = '';
    //   for(let i = str.length; i <= 1; i++) {
    //     result += str[i];
    //   }
    // }    

    function reverseString1() {
      let str = document.getElementsByTagName('input')[0].value;
      let result = '';
      for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
      }
      resultField.innerHTML = result;
      resultField.style.dislpay = 'block';
    }

    function reverseString2() {
      let str = document.getElementsByTagName('input')[0].value;
      let result = str.split("").reduce((acc, ch) => ch + acc);
      resultField.innerHTML = result;
      resultField.style.dislpay = 'block';
    }    
  
  // 13. Write a function that reverses an integer 
          // reverseInt(45) => 54
          // reverseInt(900) => 9
          // reverseInt(-17) => -71
          // reverseInt(-60) => -6


          
    