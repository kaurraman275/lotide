const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passinggrades = grades.filter(grade=>{
    if(grade>70)
     return grade;
    });
console.log("passing grades are :", passinggrades);
