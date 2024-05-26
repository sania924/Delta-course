

// async function apiData() {
//     // Define the API endpoint URL
//     const apiLink = 'https://dummy.restapiexample.com/api/v1/employees';

//     // Fetch data from the API asynchronously
//     const response = await fetch(apiLink);

//     // Parse the JSON data from the response
//     const datapoints = await response.json();

//     // Log the entire dataset to the console for inspection
//     console.log(datapoints);

//     // Map through the 'data' array in the API response
//     const staffData = datapoints.data.map((staff) => {
//         // Log each staff member's data to the console
//         console.log(staff);

//         // Check if the employee's salary is greater than 299999
//         if (staff.employee_salary > 299999) {
//             // If the salary condition is met, add the salary to 'employeeSalaryDate' array
//             employeeSalaryDate.push(staff.employee_salary);

//             // Also, add the employee's name to the 'employeeFullName' array
//             employeeFullName.push(staff.employee_name);
//         }
//     });
// }





// chart functinality
// chart data
async function apiData(){
    const apiLink='https://dummy.restapiexample.com/api/v1/employees';
    const response =await fetch(apiLink);
    const datapoints=await response.json();
    console.log(datapoints);

const staffData=datapoints.data.map((staff)=>{
console.log(staff)
if(staff.employee_salary>299999){
    employeeSalaryDate.push(staff.employee_salary)
    employeeFullName.push(staff.employee_name)

}
})

    const salary=datapoints.data.map((amount)=>amount.employee_salary); 
    console.log(salary);
    employeeSalaryDate=salary;

    const fullName=datapoints.data.map((name)=>name.employee_name);
    console.log(fullName);
    employeeFullName=fullName;}
