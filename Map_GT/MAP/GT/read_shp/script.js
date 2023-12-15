
const fileInput = document.getElementById('file-input');
const fileContent = document.getElementById('file-content');

fileInput.addEventListener('change', function() {
  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function() {
      fileContent.textContent = reader.result;
    };

    reader.readAsText(file);
  }
});

