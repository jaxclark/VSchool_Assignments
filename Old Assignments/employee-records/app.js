const employees = []

function Employee (name, title, salary, status = "Full Time") {
    this.Name = name
    this.Job_Title = title
    this.Salary = salary
    this.Status = status
    this.printEmployeeForm = function () {
        console.log("Name:", name + ", " + "Job Title:", title + ", " + "Salary:", salary + ", " + "Status:", status)
    }
}

const employee1 = new Employee("Susan", "Tech Artist", "$20/hour", "Part Time")
const employee2 = new Employee("Boyd", "Texture Artist", "$42,000/year", "Contract")
const employee3 = new Employee("Harry", "Programmer", "$80,000/year")

// employee1.printEmployeeForm()
// employee2.printEmployeeForm()
// employee3.printEmployeeForm()

function addToEmployees(newEmp) {
    employees.push(newEmp)
}

addToEmployees(employee1)
addToEmployees(employee2)
addToEmployees(employee3)

console.log(employees)


// employees.push(employee1, employee2, employee3)
// console.log(employees)