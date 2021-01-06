let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/rsz_anh_nen.png') {
    myImage.setAttribute ('src','images/rsz_firefox2.png');
  } else {
    myImage.setAttribute ('src','images/rsz_anh_nen.png');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Vui lòng nhập tên:');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Chào ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Chào ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
