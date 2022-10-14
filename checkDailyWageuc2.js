//UC1 Check Employee Attendance
console.log("******Attendance Use case******");
const IS_ABSENT=0
//gives a random value between 0 and 1
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}

//UC2 calculate daily emp wage based on part time and full time
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
console.log("Emp Wage : "+empWage);