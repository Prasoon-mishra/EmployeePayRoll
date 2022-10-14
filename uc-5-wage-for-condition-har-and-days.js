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
console.log("***UC2 calculate daily emp wage based on part time and full time and absent***")
console.log("***Refactored UC-2 for UC-3 Function that returns the emp hrs based on full time and part time***");
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
function getWorkinghours(empCheck){
switch(empCheck)
{
    case IS_PART_TIME:
        //console.log("Part Time")
        empHrs=PART_TIME_HRS;
        return empHrs;
        break;
    case IS_FULL_TIME:
        //console.log("Full Time")
        empHrs=FULL_TIME_HRS;
        return empHrs;
         break;
    default:
        //console.log("Absent")
        empHrs=0;
        return empHrs;
        break;
   
}
}
//UC 4: Calculate wage for a month
console.log("***calculate wage for 20 days***");
var empHrs1=0;
const TOTAL_WORKING_DAYS = 20;
var empWage1=0;
for(let day = 0;day<TOTAL_WORKING_DAYS;day++){
    empCheck=Math.floor(Math.random()*10)%3;
    empHrs1+=getWorkinghours(empCheck);
}
empWage1=empHrs1*WAGE_PER_HR;
console.log("Total Emp Hrs :"+empHrs1+" Total Emp Wage : "+empWage1);
//UC-5: Calculate wage till number of days and hours are reached
console.log("***UC-5: Calculate wage till number of days and hours are reached***");
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<TOTAL_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkinghours(empCheck);
}
let empWage3=totalEmpHrs*WAGE_PER_HR;
console.log("Total Days : "+ totalWorkingDays + " Total Hours : "+totalEmpHrs + " Emp Wage : "+empWage3);