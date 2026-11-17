const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('main-nav');
if(toggle&&nav){
  function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');nav.classList.remove('open');}
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
  nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
}
const search=document.getElementById('work-search');
const filters=[...document.querySelectorAll('[data-filter]')];
const cards=[...document.querySelectorAll('.work-card[data-category]')];
if(search&&cards.length){
  let category='All works';
  function updateCatalogue(){
    const query=search.value.trim().toLocaleLowerCase();let count=0;
    cards.forEach(card=>{const match=(category==='All works'||card.dataset.category===category)&&card.dataset.search.includes(query);card.hidden=!match;if(match)count++;});
    document.getElementById('result-count').textContent=count+' '+(count===1?'work':'works')+' to explore';
    document.getElementById('no-results').hidden=count!==0;
  }
  filters.forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;filters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});updateCatalogue();}));
  search.addEventListener('input',updateCatalogue);
}
