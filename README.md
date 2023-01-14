# JavaScript-Projects
Here you will be able to see all my projects that I created with Java Script.

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Text Editor</title>
  <!-- Css -->
  <link rel="stylesheet" href="css/styles.css">

  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>

  <!-- Google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
</head>

<body>

  <div class="row">
    <div class="col-md-8 textInputUser">
      <div class="container">
        <h1 class="mt-5 ms-5 me-5 pt-5">Введите какой нибудь текст</h1>
        <input class="mt-5 ms-5 me-5 pt-5 user-input" type="text" value="" id="text"><br>
        <input class="mt-5 mb-5 ms-5 me-5 btn btn-dark" type="submit" onclick="editText()">
      </div>
    </div>
    <div class="col-md-4 settings">
      <div class="settings">
        <h2 class="mt-4 pt-2 mb-5 ms-4">Параметры</h2>
        <ul class="me-5 pe-5">
          <li>
            <h3 class="pt-2 pb-3">Размер шрифта</h3>
            <div class="row pb-3">
              <div class="col-md-8">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
                  <label for="floatingInputGroup1">Введите размер</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelectGrid">
                    <option selected>10</option>
                    <option value="1">12</option>
                    <option value="2">14</option>
                    <option value="3">16</option>
                    <option value="4">18</option>
                    <option value="5">20</option>
                    <option value="6">24</option>
                    <option value="7">28</option>
                    <option value="8">32</option>
                    <option value="9">34</option>
                    <option value="10">36</option>
                  </select>
                  <label for="floatingSelectGrid">Выберите один из вариантов</label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <h3 class="pt-2 pb-3">Тип шрифта</h3>
            <div class="form-floating pb-3">
              <select class="form-select" id="floatingSelectGrid">
                <option selected>Cursive</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Inherit">Inherit</option>
                <option value="Monospace">Monospace</option>
                <option value="Sans-serif">Sans-serif</option>
                <option value="Serif">Serif</option>
              </select>
              <label for="floatingSelectGrid">Выберите один из вариантов</label>
            </div>
          </li>
          <li>
            <h3 class="pt-2 pb-3">Жирность шрифта</h3>
            <div class="form-floating pb-3">
              <select class="form-select" id="floatingSelectGrid">
                <option selected>Bold</option>
                <option value="Bolder">Bolder</option>
                <option value="Lighter">Lighter</option>
                <option value="Normal">Normal</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
              </select>
              <label for="floatingSelectGrid">Выберите один из вариантов</label>
            </div>
          </li>
          <li>
            <h3 class="pt-2 pb-3">Расположение текста</h3>
            <div class="form-floating pb-3">
              <select class="form-select" id="floatingSelectGrid">
                <option selected>Center</option>
                <option value="Left">Left</option>
                <option value="Justify">Justify</option>
                <option value="Right">Right</option>
                <option value="Inherit">Inherit</option>
              </select>
              <label for="floatingSelectGrid">Выберите один из вариантов</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <script src="js/app.js" charset="utf-8"></script>
</body>

</html>
