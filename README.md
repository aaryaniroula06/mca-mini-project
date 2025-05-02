<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 500px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
        }
        label {
            display: block;
            margin-bottom: 8px;
        }
        input[type="text"], input[type="email"], input[type="tel"], select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="submit"] {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
        }
        input[type="submit"]:hover {
            background-color: #218838;
        }
        .hidden {
            display: none;
        }
    </style>
    <script>
        function toggleForm() {
            const type = document.querySelector('input[name="userType"]:checked').value;
            document.getElementById('studentForm').classList.toggle('hidden', type !== 'student');
            document.getElementById('staffForm').classList.toggle('hidden', type !== 'staff');
        }
    </script>
</head>
<body>

<div class="container">
    <h2>Choose Login Type</h2>
    <form>
        <label>
            <input type="radio" name="userType" value="student" onclick="toggleForm()" required>
            Student
        </label>
        <label>
            <input type="radio" name="userType" value="staff" onclick="toggleForm()">
            Staff
        </label>
    </form>

    <form id="studentForm" class="hidden">
        <h2>Student Details</h2>
        <label for="sname">Name:</label>
        <input type="text" id="sname" name="sname" required>

        <label for="registration">Registration No:</label>
        <input type="text" id="registration" name="registration" required>

        <label for="sdepartment">Department:</label>
        <input type="text" id="sdepartment" name="sdepartment" required>

        <label for="semail">Email:</label>
        <input type="email" id="semail" name="semail" required>

        <label for="sphone">Phone Number:</label>
        <input type="tel" id="sphone" name="sphone" required>

        <label for="sgender">Gender:</label>
        <select id="sgender" name="sgender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <input type="submit" value="Submit">
    </form>

    <form id="staffForm" class="hidden">
        <h2>Staff Details</h2>
        <label for="fname">Name:</label>
        <input type="text" id="fname" name="fname" required>

        <label for="employeeNo">Employee No:</label>
        <input type="text" id="employeeNo" name="employeeNo" required>

        <label for="fdepartment">Department:</label>
        <input type="text" id="fdepartment" name="fdepartment" required>

        <label for="femail">Email:</label>
        <input type="email" id="femail" name="femail" required>

        <label for="fphone">Phone Number:</label>
        <input type="tel" id="fphone" name="fphone" required>

        <label for="fgender">Gender:</label>
        <select id="fgender" name="fgender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label for="staffType">Staff Type:</label>
        <select id="staffType" name="staffType" required>
            <option value="">Select Type</option>
            <option value="teaching">Teaching</option>
            <option value="non-teaching">Non-Teaching</option>
        </select>

        <input type="submit" value="Submit">
    </form>
</div>

</body>
</html>
