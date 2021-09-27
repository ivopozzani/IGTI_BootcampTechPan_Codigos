const checkBox = document.querySelectorAll('.filterOptions input')
const sort = document.querySelector("#sort")
let employeeslist = []
let roleslist = []
let checkedList = []


function fetchJson(url) {
 return fetch(url).then((r) => {
    return r.json();
  });
}
  
async function HttpRequest(){
  let [employees, roles] = await Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles")
  ]);
  employeeslist = [...employees];
  roleslist = [...roles];
  tableToHTML ();
}

function myTable(employees, roles){
  if (sort.value === 'Nome descendente') {employees.sort((a, b) => {
    if (a.name > b.name) {return -1}
  })} else if (sort.value === 'Salário ascendente') {employees.sort((a, b) => {
    if (a.salary < b.salary) {return -1}
  })} else if (sort.value === 'Salário descendente') {employees.sort((a, b) => {
    if (a.salary > b.salary) {return -1}
  })} else {employees.sort((a, b) => {
    if (a.name < b.name) {return -1}
  })}
  
  document.querySelector('.listflex h2 span').textContent = ` (${employees.length})`

  let rows = employees.map((employee) => {
    let role = roles.find(role => role.id == employee.role_id);        
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`})
        
  return `${rows.join("")}`;
}

function myTableFiltered (employees, roles) {  
  let filtered = []
  
  filtered = employees.filter((employee) => {return checkedList[0] == employee.role_id || checkedList[1] == employee.role_id || checkedList[2] == employee.role_id || checkedList[3] == employee.role_id || checkedList[4] == employee.role_id || checkedList[5] == employee.role_id || checkedList[6] == employee.role_id || checkedList[7] == employee.role_id || checkedList[8] == employee.role_id || checkedList[9] == employee.role_id || checkedList[10] == employee.role_id || checkedList[11] == employee.role_id})
  
  
  if (sort.value === 'Nome descendente') {filtered.sort((a, b) => {
    if (a.name > b.name) {return -1}
  })} else if (sort.value === 'Salário ascendente') {filtered.sort((a, b) => {
    if (a.salary < b.salary) {return -1}
  })} else if (sort.value === 'Salário descendente') {filtered.sort((a, b) => {
    if (a.salary > b.salary) {return -1}
  })} else {filtered.sort((a, b) => {
    if (a.name < b.name) {return -1}
  })}
  
  document.querySelector('.listflex h2 span').textContent = ` (${filtered.length})`
  
  let rows = filtered.map((employee) => {
    let role = roles.find(role => role.id == employee.role_id);        
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`})
    
    return `${rows.join("")}`;
}
  
function tableToHTML () {
  checkedList = []
  const checked = document.querySelectorAll('.filterOptions input:checked')

  for (let i = 0 ; i < checked.length ; i++) checkedList.push(checked[i].attributes['data-roleid'].value)

  if (checkedList.length == 0) {let table = myTable(employeeslist, roleslist);
                              document.querySelector('.tbody').innerHTML = table; }
    else {let table = myTableFiltered(employeeslist, roleslist);
          document.querySelector('.tbody').innerHTML = table;}
}

checkBox.forEach((check) => check.addEventListener('change', tableToHTML))

sort.addEventListener('change', tableToHTML)

HttpRequest();
