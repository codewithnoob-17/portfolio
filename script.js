// mobile nav toggle
  const toggle = document.querySelector('.nav__toggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.navlink').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // active nav link on scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const navlinks = document.querySelectorAll('.navlink');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navlinks.forEach(l => l.classList.toggle('active', l.dataset.target === entry.target.id));
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  sections.forEach(s => spy.observe(s));

  // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:0.1});
  reveals.forEach(r => io.observe(r));
