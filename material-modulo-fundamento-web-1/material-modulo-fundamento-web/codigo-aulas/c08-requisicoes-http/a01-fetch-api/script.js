let employeesPromise = fetch("http://localhost:3000/employees");
// 
employeesPromise.then((resp) => {
  resp.json().then((employees) => {
    let table = renderTable(employees);
    document.getElementById("app").innerHTML = table;
  });
});

function renderTable(employees) {
  let rows = employees.map(employee => {
    return `<tr><td>${employee.id}</td><td>${employee.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}