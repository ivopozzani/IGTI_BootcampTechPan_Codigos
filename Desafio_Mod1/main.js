// async function getHt () {
//   let [employees, roles] = await Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles"),]);
//   console.log(employees, roles)
// }

// getHt();



let employeesPromise = fetch("http://localhost:3000/employees");

employeesPromise.then((resp) => {resp.json().then((employees) => {
  let rolesPromise = fetch("http://localhost:3000/roles");
  rolesPromise.then((r) => {r.json().then((roles) => {
    let table = myTable(employees, roles);
    document.querySelector('.app').innerHTML = table})});  
  })})

// function sortTable () {
// (id) => id.role_id == '2'

// }

function myTable (employees, roles) {


// let employeeFilter = employees.filter(function (id){
//   if (id.role_id == 1 && id.role_id == 3) return true
// })



let rows = employeeFilter.map((employee) => {
  let role = roles.find(role => role.id == employee.role_id);
  
  return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`})

return `<table>${rows.join("")}</table>`;
}