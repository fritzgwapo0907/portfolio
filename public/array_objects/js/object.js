function showEmployees() {
   
    let table = document.getElementById('employee').getElementsByTagName('tbody')[0];
    table.innerHTML = '';  
    
    
    employees.forEach(element => {
        let newRow = table.insertRow(); 
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

       
        cell1.innerHTML = element.id;      
        cell2.innerHTML = element.name;    
        cell3.innerHTML = element.position; 
    });
}

function add() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('empName').value;
    let position = document.getElementById('empPosition').value;
    
    if (id && name && position) {
        
        employees.push({
            "id": id,         
            "name": name,      
            "position": position 
        });

       
        showEmployees();

       
        document.getElementById('id').value = "";
        document.getElementById('empName').value = "";
        document.getElementById('empPosition').value = "";
    } else {
        alert("Please fill all fields.");
    }
}
