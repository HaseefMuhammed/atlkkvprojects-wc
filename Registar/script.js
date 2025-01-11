$(document).ready(function () {
  let liveWindow;

  // Open live window
  $('#openWindow').on('click', function () {
    liveWindow = window.open("outdata.html", "LiveWindow", "width=600,height=400");
  });

  // Submit form and handle data
  $('#submit-form').submit(function (e) {
    e.preventDefault();

    const name = $('#nameInput').val().trim();
    const school = $('#schoolInput').val();
    const standard = $('#standardInput').val();
    const division = $('#divisionInput').val();
    const time = $('#timeInput').val();

    const formData = { name, school, standard, division, time };

    // Send data to Google Sheets
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyxHkgoNVXyU_kQt7j0EPxS3lxALmlUr_TGUzc4YKe7MLvWrHwxbIRjzLX_a3NAsz2yOg/exec",
      data: formData,
      method: "POST",
      success: function () {
        //alert("Form submitted successfully!");
        // Open the dialog on successful submission
        document.getElementById('scoreUpdateDialog').showModal();
        $('#submit-form')[0].reset();

        // Send data to the live window
        if (liveWindow) {
          liveWindow.postMessage(formData, "*");
        }
      },
      error: function () {
        alert("Error while submitting form!");
      }
    });
  });
});

    // Close the dialog when the close button is clicked
    document.getElementById('closeDialog').addEventListener('click', function() {
      document.getElementById('scoreUpdateDialog').close();
  });