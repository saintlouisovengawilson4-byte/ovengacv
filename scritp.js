const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.skills li').forEach(li => {
  li.querySelector('i').style.setProperty('--w', li.dataset.level / 100);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.skills li').forEach(li => observer.observe(li));

const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', async () => {
  const email = document.getElementById('mail').textContent;
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = 'Copié';
  } catch {
    copyBtn.textContent = 'Copie impossible';
  }
  setTimeout(() => (copyBtn.textContent = 'Copier'), 2000);
});

document.getElementById('year').textContent = new Date().getFullYear();