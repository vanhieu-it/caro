function handleLetGo() {
  let typePlay = document.getElementById("list-type-play").value;
  let rows = 15;
  let columns = 10;

  if (typePlay === "" || rows === "" || columns === "") {
    alert("Vui lòng chọn kiểu chơi");
    return;
  }
  window.location.href =
    "../caro/caro.html?type=" +
    typePlay +
    "&rows=" +
    rows +
    "&columns=" +
    columns;
}
