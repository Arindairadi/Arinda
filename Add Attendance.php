<!-- add_attendance.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add Attendance</title>
    <!-- Add Bootstrap CSS link here -->
</head>
<body>
    <div class="container">
        <h2>Add Attendance</h2>
        <form action="arinda.sql" method="POST">
            <div class="form-group">
                <label for="student_name">Student Name:</label>
                <input type="text" class="form-control" id="student_name" name="student_name" required>
            </div>
            <div class="form-group">
                <label for="student_number">Student Number:</label>
                <input type="text" class="form-control" id="student_number" name="student_number" required>
            </div>
            <div class="form-group">
                <label for="status">Status (Present/Absent):</label>
                <input type="text" class="form-control" id="status" name="status" required>
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" class="form-control" id="date" name="date" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>
</html>

<?php
include 'db_connection.php'; 
?>