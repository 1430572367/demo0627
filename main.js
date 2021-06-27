let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function changeImage() {
    let srcValue = myImage.getAttribute('src');
    if (srcValue === 'images/test.jpg') {
        newsSrcValue = 'images/test3.jpg'
        myImage.setAttribute('src',newsSrcValue);
    } else {
        newsSrcValue = 'images/test.jpg'
        myImage.setAttribute('src',newsSrcValue);
    }
}

let myButton = document.querySelector('button');

function setUserName(){ 
    let myName = prompt('请输入用户名。');
    if (null != myName) {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Hello '+myName;
    } else {
        setUserName();
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}