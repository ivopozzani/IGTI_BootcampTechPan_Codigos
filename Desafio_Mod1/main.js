const sort = document.querySelector("#sort")
const checkBox = document.querySelectorAll('.filterOptions input')
let employeeslist = []
let roleslist = []


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
  employeeslist = employees
  roleslist = roles    
  let table = myTable(employeeslist, roleslist);
  document.querySelector('.app').innerHTML = table;
}

function myTable (employees, roles) {
  
  const checked = document.querySelectorAll('.filterOptions input:checked')
  const checkedList = []
  let filtered = []
  

  for (let i = 0 ; i < checked.length ; i++) checkedList.push(checked[i].attributes['data-roleid'].value)
  
  
  
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
  
  let rows = filtered.map((employee) => {
    let role = roles.find(role => role.id == employee.role_id);        
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`})
        
  return `<table>${rows.join("")}</table>`;
}

function tableToHTML () {
  let table = myTable(employeeslist, roleslist);
  document.querySelector('.app').innerHTML = table;
}

checkBox.forEach((check) => check.addEventListener('change', tableToHTML))

sort.addEventListener('change', tableToHTML)

HttpRequest();
