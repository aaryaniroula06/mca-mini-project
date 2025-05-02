const students = [
  { id: 1, name: "Alice Johnson", contact: "alice@example.com" },
  { id: 2, name: "Bob Smith", contact: "bob@example.com" },
  { id: 3, name: "Charlie Lee", contact: "charlie@example.com" }
];

function renderStudents() {
  const container = document.getElementById("students");
  container.innerHTML = "";
  students.forEach(student => {
    const div = document.createElement("div");
    div.className = "student";
    div.innerHTML = `
      <strong>${student.name}</strong><br/>
      Contact: ${student.contact}<br/>
      <button onclick="allocateToStaff(${student.id}, 1)">Assign to Staff 1</button>
      <button onclick="allocateToStaff(${student.id}, 2)">Assign to Staff 2</button>
    `;
    container.appendChild(div);
  });
}

function allocateToStaff(studentId, staffId) {
  const student = students.find(s => s.id === studentId);
  const logDiv = document.getElementById(`staff${staffId}Log`);
  const entry = document.createElement("div");
  entry.className = "log-entry";
  const timestamp = new Date().toLocaleString();

  entry.innerHTML = `
    <strong>${student.name}</strong> (${student.contact})<br/>
    Assigned: ${timestamp}<br/>
    Times Contacted: <input type="number" min="0" /><br/>
    Response: <textarea></textarea><br/>
    Contact Again? 
    <select>
      <option value="no">No</option>
      <option value="yes">Yes</option>
    </select><br/>
    Next Contact Date: <input type="date" />
  `;
  logDiv.appendChild(entry);

  const buttons = document.querySelectorAll(`button[onclick*="${studentId}"]`);
  buttons.forEach(btn => btn.disabled = true);
}

renderStudents();
