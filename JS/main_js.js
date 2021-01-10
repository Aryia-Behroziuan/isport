// Open Full Body
document.getElementById('full-body').addEventListener('click', 
function() {
  document.querySelector('.bg-full-body').style.display = 'flex';
});

document.getElementById('clo-full-body').addEventListener('click', 
function() {
  document.querySelector('.bg-full-body').style.display = 'none';
});

//  Open Lower
document.getElementById('lower').addEventListener('click', 
function() {
  document.querySelector('.bg-lower').style.display = 'flex';
});

document.getElementById('clo-lower').addEventListener('click', 
function() {
  document.querySelector('.bg-lower').style.display = 'none';
});

// Open abs
document.getElementById('abs').addEventListener('click', 
function() {
  document.querySelector('.bg-abs').style.display = 'flex';
});

document.getElementById('clo-abs').addEventListener('click', 
function() {
  document.querySelector('.bg-abs').style.display = 'none';
});

// Open adv 
document.getElementById('adv1').addEventListener('click', 
function() {
  document.querySelector('.bg-adv').style.display = 'flex';
});

document.getElementById('clo-adv').addEventListener('click', 
function() {
  document.querySelector('.bg-adv').style.display = 'none';
});

// Open arm
document.getElementById('arm1').addEventListener('click', 
function() {
  document.querySelector('.bg-arm').style.display = 'flex';
});

document.getElementById('clo-arm').addEventListener('click', 
function() {
  document.querySelector('.bg-arm').style.display = 'none';
});

// Open Foot
document.getElementById('foot1').addEventListener('click', 
function() {
  document.querySelector('.bg-foot').style.display = 'flex';
});

document.getElementById('clo-foot').addEventListener('click', 
function() {
  document.querySelector('.bg-foot').style.display = 'none';
});

// Open sh
document.getElementById('sh1').addEventListener('click', 
function() {
  document.querySelector('.bg-sh').style.display = 'flex';
});

document.getElementById('clo-sh').addEventListener('click', 
function() {
  document.querySelector('.bg-sh').style.display = 'none';
});

// Run Sporting
function c_fullbody(){
  var value = document.getElementById('start-full-body').value
  if(value = 'Start'){
    document.getElementById('start-full-body').value = 'Stop'
  }
  else{
    document.getElementById('start-full-body').value = 'Start'
  }
}