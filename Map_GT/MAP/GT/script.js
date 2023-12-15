document.getElementById("add-file").addEventListener("click", function() {
    // Mở hộp thoại chọn file
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".shp";
  
    var dialog = document.getElementById("dialog");
    dialog.appendChild(fileInput);
  
    fileInput.click();
  });

// Tải file .shp lên
var file = document.getElementById("file-input").files[0];
var reader = new FileReader();
reader.onload = function() {
  var data = reader.result;

  // Hiển thị dữ liệu trên bản đồ
  var map = new L.Map("map", {
    center: [10, 10],
    zoom: 1
  });

  L.geoJSON(data).addTo(map);
};
reader.readAsText(file);

