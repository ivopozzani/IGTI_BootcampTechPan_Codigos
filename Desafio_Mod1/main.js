const checkBox = document.querySelectorAll('.filterOptions input')
let finalchecked = undefined
function handleCheck () {
  const checked = document.querySelectorAll('.filterOptions input:checked')
  
  var checkedList = []
  for (let i = 0 ; i < checked.length ; i++) checkedList.push(checked[i].attributes.roleid.value)
  
  finalchecked = checkedList
  console.log(finalchecked)
}


checkBox.forEach((check) => check.addEventListener('change', handleCheck))
console.log(checkBox)











let employeesPromise = fetch("http://localhost:3000/employees");

employeesPromise.then((resp) => {resp.json().then((employees) => {
  let rolesPromise = fetch("http://localhost:3000/roles");
  rolesPromise.then((r) => {r.json().then((roles) => {
    let table = myTable(employees, roles);
    document.querySelector('.app').innerHTML = table})});  
  })})


function myTable (employees, roles) {

  var test = [1,4]

var filtered = employees.filter((employee) => {return test[0] == employee.role_id || test[3] == employee.role_id})

console.log(filtered)

// let rows = employees.map((employee) => {
//   let role = roles.find(role => role.id == employee.role_id);
  
//   return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`})

// return `<table>${rows.join("")}</table>`;
}