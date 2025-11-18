const form = document.getElementById('companyForm');
const logoInput = document.getElementById('logo');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('companyName').value;
  const motto = document.getElementById('motto').value;
  const logoFile = logoInput.files[0];

  if (logoFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Save info in localStorage
      localStorage.setItem("companyName", name);
      localStorage.setItem("companyMotto", motto);
      localStorage.setItem("companyLogo", e.target.result);

      // Open new page dynamically
      const newPage = window.open("", "_blank");
      newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Company Card</title>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <div class="card">
            <img src="${e.target.result}" alt="Company Logo">
            <h3>${name}</h3>
            <p>"${motto}"</p>
            <a href="index.html" class="back-btn">Back to Form</a>
          </div>
        </body>
        </html>
      `);
    };
    reader.readAsDataURL(logoFile);
  }
});
