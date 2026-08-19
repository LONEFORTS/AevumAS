// Aevum client-side glue
document.getElementById('navToggle')?.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.toggle('open');
});
const minutes = (m) => `${String(m).padStart(2,'0')}:00`;
const fd = document.getElementById('focusDisplay');
if (fd){
  const set = (m) => fd.textContent = minutes(m);
  document.getElementById('custom25')?.addEventListener('click', () => { set(25); const inp = document.querySelector('#focusForm [name=duration_min]'); if (inp) inp.value = 25; });
  document.getElementById('custom45')?.addEventListener('click', () => { set(45); const inp = document.querySelector('#focusForm [name=duration_min]'); if (inp) inp.value = 45; });
  document.getElementById('custom60')?.addEventListener('click', () => { set(60); const inp = document.querySelector('#focusForm [name=duration_min]'); if (inp) inp.value = 60; });
}
