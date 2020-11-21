function redirect(){
  window.location.href='CSE/CSE1.html';
  var dep = document.getElementById('department').value;
  var year = document.getElementById('year').value;
  if (dep == 'cse'){
    if (year == '1y'){
      window.location.href='CSE/CSE1.html';
    }
    else if (year == '2y') {
      window.location.href='CSE/CSE2.html';
    }
    else if (year == '3y') {
      window.location.href='CSE/CSE3.html';
    }
    else if (year == '4y') {
      window.location.href='CSE/CSE4.html';
    }
  }
  return false;
}

function test() {
  window.location.href="CSE/CSE1.html";
}
