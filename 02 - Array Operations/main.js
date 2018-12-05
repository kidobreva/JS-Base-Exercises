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

  function createTable (data, id) {
    let el = '<tbody>'
    for(var i = 0; i < data.length; i++){
      el+= '<tr>';
      el+= '<td>' + data[i].first + '</td>';
      el+= '<td>' + data[i].last + '</td>';
      el+= '<td>' + data[i].year + '</td>';
      el+= '<td>' + data[i].passed + '</td>';
      el+= '</tr>';
    }
    el+='</tbody>';
    document.getElementById(id).innerHTML = el;
  }

  createTable(inventors, 'tableData');

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // 1. Filter the list of inventors for those who were born in the 1500's
  // document.querySelector('button').addEventListener('click', (event) => {
  //   event.preventDefault();
  //   task1();
  // });

  function task1(){
    document.getElementById('task1').innerHTML = '';
    let inventorsList = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);
    inventorsList.forEach(el => {
           let p = document.createElement('p');
           p.innerHTML = el.first + ' ' + el.last + ' ' + el.year + ' ' + el.passed;
           document.getElementById('task1').appendChild(p);           
          });
    myFunction("task1");
  } 

  function myFunction(id) {
    var x = document.getElementById(id);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

  // 2. Give us an array of the inventors' first and last names
  function task2() {
    let inventorsNames = inventors.map(inventor => {
      let firstName = inventor.first;
      let lastName = inventor.last;
      return firstName + ' ' + lastName;
    });

    let thead = '<thead>' + '<tr>' + '<th>' + 'Names' + '</th>' + '</tr>' + '</thead>'

    let el = '<tbody>'
    for(var i = 0; i < inventorsNames.length; i++){
      el+= '<tr>';
      el+= '<td>' + inventorsNames[i] + '</td>';
      el+= '</tr>';
    }
    el+='</tbody>';
    document.getElementById('task2Data').innerHTML = el;
    myFunction("task2Data");
    // createTable(inventorsNames, 'task2Data');
    console.table(inventorsNames);
  }
  

  // 3. Sort the inventors by birthdate, oldest to youngest
  let inventorsBirthdays = inventors.map(inventor => inventor.year).sort((a, b) => a - b);
  console.log(inventorsBirthdays);

  // 4. How many years did all the inventors live?
  let inventorsLived = inventors.map(inventor => inventor.passed - inventor.year)
                                .reduce((acc, years) => acc + years, 0);
  console.log(inventorsLived);                              

  // 5. Sort the inventors by years lived
  let inventorsByYearsLived = inventors.map(inventor => {
    return inventor.passed - inventor.year
  });
  console.log(inventorsByYearsLived);

  // 6. Sort the people alphabetically by last name

  // 7. Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  
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
  
  // 9. Is everyone 19 or older?

  // 10. Find the comment with the ID of 823423

  // 11. Delete the comment with the ID of 823423
  
  // Bonus algorithms:
  
  // 12. Write a function to reverse a string
          //reverseStr('hello') => 'olleh'
  
  // 13. Write a function that reverses an integer 
          // reverseInt(45) => 54
          // reverseInt(900) => 9
          // reverseInt(-17) => -71
          // reverseInt(-60) => -6