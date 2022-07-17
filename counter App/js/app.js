const display = document.querySelector('.display');
const btns = document.querySelectorAll('.block-items');
let count = 0;
btns.forEach(function(btn) {
   btn.addEventListener('click', function(e) {
      let styles = e.currentTarget.classList;
      if(styles.contains('incr')) {
         count++;
      } else if(styles.contains('decr')) {
         count--;
      } else if(styles.contains('res')) {
         count = 0;
      }
      display.textContent = count;
      if(count < 0) {
      display.style.color = 'red';
      } else if(count > 0) {
         display.style.color = 'green';
      } else {
         display.style.color = 'black';
      }
   });
});



