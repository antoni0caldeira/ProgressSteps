const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let current = 1;



next.addEventListener('click', () => {
  current++;
  if (current > circles.length) {
    current = circles.length;
  }
  console.log(current);
  update();
});

previous.addEventListener('click', () => {
    current--;
    if (current < 1) {
      current = 1;
    }
    console.log(current);
    update();
  });

function update() {
  circles.forEach((circle, index) => {
    if (index < current) {
      circle.classList.add('active');
    }
    else {
    circle.classList.remove('active');
    }
    })

    progress.style.width = `${((current -1) / (circles.length -1)) * 100}%`;

    if (current === circles.length) {
      next.disabled = true;
    } else if (current === 1) {
        previous.disabled = true;
    } else {
        next.disabled = false;
        previous.disabled = false;
    }
}