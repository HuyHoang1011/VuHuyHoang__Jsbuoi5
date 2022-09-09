<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="card container">
        <h5 class="card-header">Bài 1: In số</h5>
        
        <div class="card-body">
            <p>Họ và tên</p>
            <input id="Name" type="text">
            <p>Tổng thu nhập năm</p>
            <input id="Sum" type="number">
            <p>Số người phụ thuộc</p>
            <input id="Human" type="number">
            <button type="button" class="btn btn-primary" id="Find">Sắp xếp</button>
        </div>
        <div class="card-footer bg-dark">
            <p id="Xapxep" class="bg-dark" style="color: white ;"></p>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div class="card container">
      <h5 class="card-header">Bài 2: Tính tiền biên lai</h5>
      <div class="card-body">
        <p>Loại khách hàng</p>
        <button type="button" class="btn btn-primary" id="nhaDan">Nhà Dân</button>
        <button type="button" class="btn btn-primary" id="doanhNghiep">Doanh Nghiệp</button>
          <p>Mã khách hàng</p>
          <input id="ID" type="number">
          <div id="Conect">
            <p>Số kết nối</p>
            <input id="Conect-number" type="number">
          </div>
          <p >Số kênh cao cấp</p>
          <input id="highOptions" type="number">
          <br>
          <button type="button" class="btn btn-primary" id="FindB2">Tính toán</button>
      </div>
      <div class="card-footer bg-dark">
          <p id="Print" class="bg-dark" style="color: white ;"></p>
      </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    
    <script src="./main.js"></script>
  </body>
</html>
