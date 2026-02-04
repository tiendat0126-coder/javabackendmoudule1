let arr = [14, 22, 35, 43, 57, 64, 78, 81];
let search = Number(prompt("Nhập vào số cần tìm: "));
let hasNumber = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === search) {
    hasNumber = true;
  }
}
if (hasNumber) {
  alert("Bingo");
} else {
  alert("Chúc bạn may mắn lần sau");
}
