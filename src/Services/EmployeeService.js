const KEYS = {
    Employees: 'Employees',
    EmployeeId: 'EmployeeId'
}


export const getDepartmentCollection = () => ([
    {id: '1', title: 'Development'},
    {id: '2', title: 'Marketing'},
    {id: '3', title: 'Accounting'},
    {id: '4', title: 'HR'},
])

export function insertEmployees(data) {
    let Employees = getAllEmployees();
    Employees.push(data)
    data['id'] = generateEmployeeId()
    localStorage.setItem(KEYS.Employees, JSON.stringify(Employees))
}

export function generateEmployeeId() {
    if(localStorage.getItem(KEYS.EmployeeId) === null)
        localStorage.setItem(KEYS.EmployeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.EmployeeId))
    localStorage.setItem(KEYS.EmployeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if(localStorage.getItem(KEYS.Employees) === null)
        localStorage.setItem(KEYS.Employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.Employees));
}