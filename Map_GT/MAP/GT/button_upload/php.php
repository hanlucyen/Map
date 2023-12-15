<?php

// Check if the form has been submitted
if (isset($_FILES['shpFile']['error'])) {
  $fileError = $_FILES['shpFile']['error'];

  if ($fileError === UPLOAD_ERR_OK) {
    // Check if the file extension is .shp
    $fileExtension = pathinfo($_FILES['shpFile']['name'], PATHINFO_EXTENSION);
    if ($fileExtension !== 'shp') {
      echo json_encode([
        'success' => false,
        'error' => 'Invalid file extension. Please upload a .shp file'
      ]);
      return;
    }

    // Specify the directory where the file will be uploaded
    $targetDir = "uploads/";

    // Check if the directory exists, if not, create it
    if (!file_exists($targetDir)) {
      mkdir($targetDir, 0777, true);
    }

    // Generate a unique name for the file
    $uniqueFileName = basename($_FILES['shpFile']['name']) . uniqid() . "." . $fileExtension;

    // Upload the file to the specified directory
    if (move_uploaded_file($_FILES['shpFile']['tmp_name'], $targetDir . $uniqueFileName)) {
      echo json_encode([
        'success' => true
      ]);
    } else {
      echo json_encode([
        'success' => false,
        'error' => 'There was an error uploading the SHP file'
      ]);
    }
  } else {
    echo json_encode([
      'success' => false,
      'error' => 'There was an error uploading the file'
    ]);
  }
}
