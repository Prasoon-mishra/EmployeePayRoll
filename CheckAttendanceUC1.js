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