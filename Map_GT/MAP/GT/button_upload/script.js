const uploadForm = document.getElementById('uploadForm');
const uploadStatus = document.getElementById('uploadStatus');

uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(uploadForm);

  fetch('upload-shp.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      uploadStatus.textContent = 'SHP file uploaded successfully';
    } else {
      uploadStatus.textContent = 'Error uploading SHP file: ' + data.error;
    }
  })
  .catch(error => {
    console.error(error);
    uploadStatus.textContent = 'An error occurred while uploading the SHP file';
  });
});
