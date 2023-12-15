const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const paintBtn = document.getElementById('paint-btn');

let painting = false;

canvas.addEventListener('mousedown', (e) => {
    painting = true;
    draw(e);
});

canvas.addEventListener('mousemove', (e) => {
    if (!painting) return;
    draw(e);
});

canvas.addEventListener('mouseup', () => {
    painting = false;
});

function draw(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, 5, 5);
    ctx.closePath();
}

paintBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Hàm vẽ hình vuông
function drawSquare(x, y, width, height, color) {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
  
  // Hàm vẽ hình tròn
  function drawCircle(x, y, radius, color) {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  // Hàm xử lý sự kiện click của nút vẽ hình vuông
  document.getElementById('draw-square').addEventListener('click', function() {
    // Lấy tọa độ của con trỏ chuột
    var x = Event.clientX;
    var y = Event.clientY;
  
    // Lấy kích thước của hình vuông
    var width = 50;
    var height = 50;
  
    // Lấy màu của hình vuông
    var color = '#ff0000';
  
    // Vẽ hình vuông
    drawSquare(x, y, width, height, color);
  });
  
  // Hàm xử lý sự kiện click của nút vẽ hình tròn
  document.getElementById('draw-circle').addEventListener('click', function() {
    // Lấy tọa độ của con trỏ chuột
    var x = Event.clientX;
    var y = Event.clientY;
  
    // Lấy bán kính của hình tròn
    var radius = 50;
  
    // Lấy màu của hình tròn
    var color = '#00ff00';
  
    // Vẽ hình tròn
    drawCircle(x, y, radius, color);
  });

// Menu
.menu {
    width: 200px;
    margin: 0 auto;
  }
  
  .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    display: block;
    padding: 10px;
    cursor: pointer;
  }
  
  .menu li a {
    text-decoration: none;
    color: black;
  }
  
  .menu li ul {
    display: none;
    position: absolute;
    background-color: lightgray;
    border-radius: 5px;
    padding: 10px;
  }
  
  .menu li:hover ul {
    display: block;
  }
  
// Drag 
function dragImage(event) {
  // Lấy tọa độ của con trỏ chuột
  var x = event.clientX;
  var y = event.clientY;

  // Cập nhật vị trí của hình ảnh
  document.getElementById("image").style.left = x;
  document.getElementById("image").style.top = y;
}

  