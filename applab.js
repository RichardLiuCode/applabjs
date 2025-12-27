/*
</>

This was build by Richard liu, this is for app lab code in browser

You can use this code in your website
*/

//UI Control
function write(text) {
  document.body.innerHTML = text;
}

function getText(elementId) {
  return (
    document.getElementById(elementId).value ||
    document.getElementById(elementId).innerHTML
  );
}

function setImageUrl(ImageId, TargetImageURL) {
  document.getElementById(ImageId).src = TargetImageURL;
}

function getNumber(id) {
  return parseFloat(document.getElementById(id).value);
}

function setNumber(id, Number) {
  if (!isNaN(Number)) {
    if (document.getElementById(id).value == undefined) {
      document.getElementById(id).innerHTML = Number;
    } else {
      document.getElementById(id).value = Number;
    }
  } else {
    if (document.getElementById(id).value == undefined) {
      document.getElementById(id).innerHTML = NaN;
    } else {
      document.getElementById(id).value = NaN;
    }
  }
}

function setImageUrl(ImageId, url) {
  document.getElementById(ImageId).src = url;
}

function getImageUrl(ImageId) {
  return document.getElementById(ImageId).src;
}

function setStyle(ID, CSS) {
  document.getElementById(ID).style = CSS;
}

function setText(elementId, text) {
  let element = document.getElementById(elementId);
  if (element.value != undefined) {
    element.value = text;
  } else {
    element.innerText = text;
  }
}

function hideElement(id) {
  document.getElementById(id).style.display = "none";
}

function showElement(id) {
  document.getElementById(id).style.display = "revert"
}

function deleteElement(id) {
  document.getElementById(id).remove();
}

function onEvent(id, status, callback) {
  var elementForID = document.getElementById(id);
  if (elementForID) {
    elementForID.addEventListener(status, callback);
  } else {
    console.error("Element with ID " + id + " not found.");
  }
}

function open(URLForOpen) {
  window.open(URLForOpen);
}


function button(id, text) {
  let newButton = document.createElement("button");
  newButton.innerText = text;
  newButton.id = id;
  document.body.appendChild(newButton);
}

function textInput(id, text) {
  let newTextInput = document.createElement("input");
  newTextInput.type = "text";
  newTextInput.value = text;
  newTextInput.id = id;
  document.body.appendChild(newTextInput);
}

function textLabel(id, text) {
  let newLabel = document.createElement("label");
  newLabel.innerText = text;
  newLabel.id = id;
  document.body.appendChild(newLabel);
}

function image(id, url) {
  let newImage = document.createElement("img");
  newImage.id = id;
  newImage.src = url;
  document.body.appendChild(newImage);
}

function getXPosition(id){
return parseFloat(window.getComputedStyle(document.getElementById(id)).left);
}

function getYPosition(id){
return parseFloat(window.getComputedStyle(document.getElementById(id)).top);
}
//MATH
function randomNumber(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(0));
}

//list
function appendItems(list, item) {
  list.push(item);
}


