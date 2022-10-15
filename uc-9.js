//UC1 Check Employee Attendance
console.log("******Attendance Use case******");
const IS_ABSENT = 0;
//gives a random value between 0 and 1
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
  console.log("Employee is Absent");
} else {
  console.log("Employee is Present");
}

/*UC2 calculate daily emp wage based on part time and full time
console.log("***UC2 calculate daily emp wage based on part time and full time and absent***")
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
let empHrs=0;
var empWage = 0;
empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck)
{
    case IS_PART_TIME:
        console.log("Part Time")
        empHrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        console.log("Full Time")
        empHrs=FULL_TIME_HRS;
         break;
    default:
        console.log("Absent")
        empHrs=0;
        break;
}
empWage=empHrs*WAGE_PER_HR;
console.log("Emp Wage : "+empWage);*/
//UC-3 function that returns the emp hrs based on full time and part time
console.log(
  "***UC2 calculate daily emp wage based on part time and full time and absent***"
);
console.log(
  "***Refactored UC-2 for UC-3 Function that returns the emp hrs based on full time and part time***"
);
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
function getWorkinghours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      //console.log("Part Time")
      empHrs = PART_TIME_HRS;
      return empHrs;
      break;
    case IS_FULL_TIME:
      //console.log("Full Time")
      empHrs = FULL_TIME_HRS;
      return empHrs;
      break;
    default:
      //console.log("Absent")
      empHrs = 0;
      return empHrs;
      break;
  }
}
//UC 4: Calculate wage for a month
console.log("***calculate wage for 20 days***");
var empHrs1 = 0;
const TOTAL_WORKING_DAYS = 20;
var empWage1 = 0;
for (let day = 0; day < TOTAL_WORKING_DAYS; day++) {
  empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs1 += getWorkinghours(empCheck);
}
empWage1 = empHrs1 * WAGE_PER_HR;
console.log("Total Emp Hrs :" + empHrs1 + " Total Emp Wage : " + empWage1);
//UC-5: Calculate wage till number of days and hours are reached
console.log(
  "***UC-5: Calculate wage till number of days and hours are reached***"
);
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
//UC-6 use arrays to store daily wage
let empDailyWageArr = new Array();
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < TOTAL_WORKING_DAYS
) {
  totalWorkingDays++;
  empCheck = Math.floor(Math.random() * 10) % 3;
  totalEmpHrs += getWorkinghours(empCheck);
  empDailyWageArr.push(calculateDailyWage(getWorkinghours(empCheck)));
}
let empWage3 = totalEmpHrs * WAGE_PER_HR;
console.log(
  "Total Days : " +
    totalWorkingDays +
    " Total Hours : " +
    totalEmpHrs +
    " Emp Wage : " +
    empWage3
);
//function to calculate daily wage
function calculateDailyWage(empHrs) {
  return empHrs * WAGE_PER_HR;
}
//UC-7 Array Helper functions
//7a)reduce and Foreach Traversal
console.log("***7a) Array Helper function Foreach and reduce***");
let totEmpWage = 0;
function sum(dailyWage) {
  totEmpWage += dailyWage;
}
//foreach to traverse the array and print total wage
empDailyWageArr.forEach(sum);
console.log(
  "Total Days : " +
    totalWorkingDays +
    " Total Hours : " +
    totalEmpHrs +
    " Emp Wage : " +
    totEmpWage
);
function totalWages(totWage,dailyWage){
return totWage+dailyWage;
}
//using reduce to traverse the array,
console.log("Total Wage using Reduce "+empDailyWageArr.reduce(totalWages,0));
//7b)Map Traversal
console.log("***7b) Array Helper function Map***");
let day = 0;
//functions to day with wage
function mapDayWithWage(dailywage){
    day++;
    return day+" = "+dailywage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Day With Daily Wage");
console.log(mapDayWithWageArr);
//7c)Filter use
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("***7c)Filter use***");
let fullTime = mapDayWithWageArr.filter(fullTimeWage);
console.log("Full time along with day")
console.log(fullTime);
//7d)Using find to get the first occurence
console.log("***7d)Usinf find to get the first occurence***")
function findFullTimeFirstOccurence(dailyWage){
    return dailyWage.includes("160");
}
console.log("7d)Find 1st occurences with full day salary: "+mapDayWithWageArr.find(findFullTimeFirstOccurence));
//7E) check if every element of full time employee has full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("7e)IS Find every occurences with full day salary: "+fullTime.every(isAllFullTimeWage));
//7F) check for any part time wage using some
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");

} 
console.log("7f)check for any part time wage using some: "+mapDayWithWageArr.some(isAnyPartTimeWage));
//7g)Find the number of days worked
function totalDaysWorked(numofDays,dailyWage){
    if(dailyWage>0)
    numofDays++;
    return numofDays;
}
console.log("7g)Number of days employee worked : "+empDailyWageArr.reduce(totalDaysWorked,0));
//UC-8 Using Map
var empDailyHrmap = new Map();
console.log("***UC8 - Using Map***")
{
  const MAX_HRS_IN_MONTH = 160;
  const TOTAL_WORKING_DAYS = 20;
  let totalEmpHrs = 0;
  let totalWorkingDays = 0;
  let empDailyWageArr = new Array();
  let empDailyWageMap = new Map();
  function calculateDailyWage(empHrs){
      return empHrs*WAGE_PER_HR;
  }
  while (
    totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < TOTAL_WORKING_DAYS
  ) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkinghours(empCheck);
    empDailyWageArr.push(calculateDailyWage(getWorkinghours(empCheck)));
    empDailyHrmap.set(totalWorkingDays,getWorkinghours(empCheck));
    empDailyWageMap.set(totalWorkingDays,calculateDailyWage(getWorkinghours(empCheck)));
  }
  console.log(empDailyWageMap);
  function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
  }
  //Array.from create a array with elements satisfying the condition
  console.log("Emp Wage Map total Wage: "+
  Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC-9 Arrow Functions
const findTotal = (totalVal,DailyVal)=>{
  return totalVal+DailyVal;
}
let count = 0;
let totalHrs = Array.from(empDailyHrmap.values()).reduce(findTotal,0);
let totalSalary = Array.from(empDailyWageMap.values()).filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
//UC-9a)Use arrow function to find emp total hrs and wage
console.log(`UC9a) Arrow => Emp Total hrs: ${totalHrs} \nEmp Total Wage: ${totalSalary} `);
//UC-9b)show fll working day,part time and absent days
let absentDays = new Array();
let partWorkingDay = new Array();
let fullWorkingDay = new Array();
empDailyHrmap.forEach((value,key,map) =>{
  if( value == 8)
  fullWorkingDay.push(key);
  else if(value == 4)
  partWorkingDay.push(key);
  else
  absentDays.push(key);
})
console.log("Full working days "+fullWorkingDay);
console.log("Part time days : "+partWorkingDay);
console.log("Absent days "+absentDays);
}