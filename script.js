// Element to be selected
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const image = document.querySelector('.image img');
const mailme = document.querySelector('.mailme');
const description = document.querySelector('.info h3');
const profiles = document.querySelector('.profiles');

// the animation part
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// out animation
container.addEventListener('mouseleave', (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = 'all 0.5s ease';
  //Popback
  title.style.transform = 'translateZ(0px)';
  image.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  profiles.style.transform = 'translateZ(0px)';
  mailme.style.transform = 'translateZ(0px)';
});

// inner animation
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  //Popout
  title.style.transform = 'translateZ(150px)';
  image.style.transform = 'translateZ(200px) rotateZ(0deg)';
  description.style.transform = 'translateZ(125px)';
  profiles.style.transform = 'translateZ(100px)';
  mailme.style.transform = 'translateZ(75px)';
});
