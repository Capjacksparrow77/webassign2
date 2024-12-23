$(document).ready(function () {
  $("#registrationForm").on("submit", function (e) {
      e.preventDefault(); // Prevent page refresh
      
      const formData = $(this).serialize(); // Serialize form data

      // Ajax call to send form data to submit.php
      $.post("submit.php", formData, function (response) {
          $("#successMessage").html(response); // Display success message
          $("#registrationForm")[0].reset(); // Reset form
      });
  });
});