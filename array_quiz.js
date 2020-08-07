
console.log("Q1 : ");
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    fruits.forEach( (fruit) => console.log(fruit));
  }

  console.log("Q2 : ");

  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    const fruits2 = fruits.split(',');

    fruits2.forEach((fruit) => console.log(fruit));

  }

  console.log("Q3 : ");

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

    //역순으로 정렬하는 reverse()함수
    const rearray = array.reverse();

    console.log(rearray);
  }

  console.log("Q4 : ");

  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];

    const threearray = array.splice(2,array.length-1);
    console.log(threearray);
  }
  

  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];


  console.log("Q5 : ");

  // Q5. find a student with the score 90
  {
    //Object.values()는 오브젝트의 value들만 출력하게 해줍니다.
    //아래 쿼리에서는 students의 각 배열안에있는 오브젝트들의 모든 value를 호출

    for(let i = 0;i < students.length -1 ;i++){
      if(students[i].score == 90){
        console.log(Object.values(students[i]));
      }
    }

  }

  console.log("Q6 : ");

  // Q6. make an array of enrolled students
  //map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 
  //호출한 결과를 모아 새로운 배열을 반환합니다.

  {
    let result = students.map(({name}) => name);
    console.log(result);
  }

  console.log("Q7 : ");

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    let result = students.map(({score}) => score);
    console.log(result);
  }
  
  console.log("Q8 : ");

  // Q8. check if there is a student with the score lower than 50
  {
    for(let i = 0;i < students.length -1 ;i++){
      if(students[i].score < 50){
        console.log(Object.values(students[i]));
      }
    }
  }
  
  console.log("Q9 : ");

  // Q9. compute students' average score
  {
    let sum = 0;

    for(let i = 0;i < students.length -1 ;i++){
      sum += students[i].score
    }
    console.log(sum /(students.length-1));
  }
  
  console.log("Q10 : ");

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    let result = students.map(({score}) => score);
    console.log(result.join(','));
  }
  
  console.log("bonus! : ");

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    let result = students.map(({score}) => score);
    console.log(result.sort());
  }