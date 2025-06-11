const toggle = document.getElementById("loginToggle");
const label = document.getElementById("login-label");
const formFields = document.getElementById("form-fields");

function updateForm(isAdmin) {
  if (isAdmin) {
    label.textContent = "Admin Login";
    formFields.innerHTML = `
      <input type="text" placeholder="Admin ID" /><br />
      <input type="password" placeholder="Password" />
    `;
  } else {
    label.textContent = "Student Login";
    formFields.innerHTML = `
      <input type="text" placeholder="Student ID" /><br />
      <input type="password" placeholder="Password" />
    `;
  }
}

toggle.addEventListener("change", () => {
  updateForm(toggle.checked);
});
