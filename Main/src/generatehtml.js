
const generateHTML = (data) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Builder</title>
    <link rel="stylesheet" href="style.css ">
</head>
<body>

    <header>Employee Profiles</header>

    <div class="container">
       
        <div class="card">
            <h3>${data.name} </h3>
            <p>Employee Title: ${data.menu}</p>
            <p>Employee ID: ${data.id}</p>
            <p>Email: ${data.email}</p>s
            <p>School: ${data.school}</p>
            <p>GitHub Username: ${data.github}</p>
        </div>
    </div>
 
    <script src="index.js"></script>
</body>
</html>`;



module.exports = generateHTML