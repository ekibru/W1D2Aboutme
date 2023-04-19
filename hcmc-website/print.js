const form = document.getElementById('patient-form');
const table = document.getElementById('patient-table').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const patientId = document.getElementById('patient-id').value;
  const firstName = document.getElementById('first-name').value;
  const middleInitial = document.getElementById('middle-initial').value;
  const lastName = document.getElementById('last-name').value;
  const dateOfBirth = document.getElementById('date-of-birth').value;
  const department = document.getElementById('department').value;
  const isOutPatient = document.getElementById('out-patient').checked;

  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);
  const cell7 = row.insertCell(6);

  cell1.innerHTML = patientId;
  cell2.innerHTML = firstName;
  cell3.innerHTML = middleInitial;
  cell4.innerHTML = lastName;
  cell5.innerHTML = dateOfBirth;
  cell6.innerHTML = department;
  cell7.innerHTML = isOutPatient ? 'Yes' : 'No';

  form.reset();
});
