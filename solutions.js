console.log('Defining functions!');

function changeNavColor() {
  var navBar = document.querySelector('#topbar');
  navBar.style.background = 'yellow';
  console.log('i changed the background color of the navbar to yellow >:)');
};
// changeNavColor();


// tried to actually ADD an h1 but failed so instead i changed the already existing h1 :'(
// my attempt is commented out below
function takeOver() {
    var takeOverMsg = document.querySelector('h1');
    takeOverMsg.innerHTML = 'This page is now under Karla\'s control!';
//     var newMsg = document.createElement('h1');
//     var msg = document.createTextNode('get rekt imgur');
//     newMsg.appendChild(msg);
    takeOverMsg.style.fontSize = '30px';
//     newMsg.style.color = 'white';
};
// takeOver();
