function checkpw() {
  
  let count = 0;
  const pw = '12345';
  let mess = '';
  let mess_count = '';

  let i = 1;
  while (i <= 5) 
  {
      let input_pw = prompt("Enter your password: ");
      count++;
      alert("Bạn đã nhập đến lần thứ " + count);
      i++;

      if (input_pw == pw) {
        alert("Mật khẩu đã đúng");
        break;
      } else {
        alert("Mật khẩu chưa đúng");
        
      }

      if (count == 5) {
        alert("Bạn đã hết số lần nhập");
        break;
      }
  }
 
  
  
}