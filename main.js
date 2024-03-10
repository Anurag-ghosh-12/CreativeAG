var typed = new Typed('.home__text', {
  strings: ["FrontEnd Developer", "Coder", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

window.addEventListener('scroll',reveal);

function reveal()
{
var reveals=document.querySelectorAll('.reveal');

for(var i=0;i<reveals.length;i++)
{
  var windowheight=window.innerHeight;
  var revealtop=reveals[i].getBoundingClientRect().top;
  var revealpoint=150;

  if(revealtop<windowheight-revealpoint)
  {
    reveals[i].classList.add('active');
  }
  else{
    reveals[i].classList.remove('active');
  }
}
}