function validate(event) {
  const form = document.querySelector('form');
  const latError = document.querySelector('#latError');
  const longError = document.querySelector('#longError');
  event.preventDefault();
  const lat = document.querySelector('#lat');
  const long = document.querySelector('#long');
  
  const checkLat = ()=>{
    if(lat.value >= -90 && lat.value <= 90){
      return true;
     }
  }
  const checkLong = ()=>{
    if(long.value >= -180 && long.value <= 180){
      return true;
    }
  }
  if(checkLat()){
    latError.style.display='none';
  }else{latError.style.display='inline-block'}
  if(checkLong()){
    longError.style.display='none';
  }else{longError.style.display='inline-block'}
  if(checkLat() && checkLong()){
    form.submit();
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
