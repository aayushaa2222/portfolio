const hero      = document.getElementById('hero');
const layerBg   = document.getElementById('layerBg');
const layerMist = document.getElementById('layerMist');
const layerVig  = document.getElementById('layerVig');
const heroText  = document.getElementById('heroText');
const cursor    = document.getElementById('cursor');
const catWrapper= document.getElementById('catWrapper');
const overlay   = document.getElementById('overlay');

hero.addEventListener('mousemove', e => {
  const { width, height, left, top } = hero.getBoundingClientRect();
  const x = (e.clientX - left) / width  - 0.5;
  const y = (e.clientY - top)  / height - 0.5;
  layerBg.style.transform   = `translate(${x*-22}px,${y*-14}px) scale(1.08)`;
  layerMist.style.transform = `translate(${x*-12}px,${y*-8}px)`;
  layerVig.style.transform  = `translate(${x*-5}px,${y*-4}px)`;
  heroText.style.transform  = `translate(${x*8}px,${y*5}px)`;
  cursor.style.left = e.clientX+'px';
  cursor.style.top  = e.clientY+'px';
});

hero.addEventListener('mouseleave', () => {
  layerBg.style.transform   = 'translate(0,0) scale(1.08)';
  layerMist.style.transform = 'translate(0,0)';
  layerVig.style.transform  = 'translate(0,0)';
  heroText.style.transform  = 'translate(0,0)';
});

catWrapper.addEventListener('click', () => {
  hero.style.transformOrigin = '54% 42%';
  hero.style.transition = 'transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.65s ease';
  hero.style.transform = 'scale(2.4)';
  hero.style.opacity = '0';
  setTimeout(() => {
    overlay.classList.add('active');
    setTimeout(() => { window.location.href = 'about.html'; }, 300);
  }, 450);
});