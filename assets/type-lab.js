/* Type lab switcher: preview deployments only (trial fonts stay off the live domain). */
(function(){
  if(/(^|\.)adsnow\.ro$/.test(location.hostname)) return;
  var V = {
    acum: { name: 'Acum', note: '<b>Acum.</b> Space Grotesk + Inter, fonturile de pe site-ul live.' },
    leica: { name: 'A · Leica', note: '<b>A · Leica.</b> TT Hoves Pro, o singură familie. Titluri late, precise. Lupa îngroașă și lărgește literele.' },
    prieten: { name: 'B · Prietenul serios', note: '<b>B · Prietenul serios.</b> TT Jenevers pentru titluri, TT Hoves Pro pentru text. Lupa înclină cuvintele în italic.' },
    truc: { name: 'C · Dublura', note: '<b>C · Dublura.</b> TT Alientz: fiecare literă are două naturi, grotesk și serif. Lupa o arată pe a doua.' }
  };
  var DEFAULT = 'prieten';
  var q = (location.search.match(/[?&]type=(\w+)/) || [])[1];
  var saved = null;
  try { saved = localStorage.getItem('ads-type'); } catch(e){}
  var cur = V[q] ? q : V[saved] ? saved : DEFAULT;
  function apply(t){
    cur = t;
    if(t === 'acum') document.documentElement.removeAttribute('data-type');
    else document.documentElement.setAttribute('data-type', t);
    try { localStorage.setItem('ads-type', t); } catch(e){}
  }
  apply(cur);
  document.addEventListener('DOMContentLoaded', function(){
    var box = document.createElement('div');
    box.className = 'tl';
    box.innerHTML = '<div class="tl-note"></div><div class="tl-row" role="group" aria-label="Variantă de font">' +
      Object.keys(V).map(function(k){ return '<button type="button" data-t="' + k + '">' + V[k].name.split(' · ')[0] + '</button>'; }).join('') + '</div>';
    document.body.appendChild(box);
    var note = box.querySelector('.tl-note'), hideT;
    function sync(){
      box.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-t') === cur ? 'true' : 'false'); });
      note.innerHTML = V[cur].note; note.classList.remove('off');
      clearTimeout(hideT); hideT = setTimeout(function(){ note.classList.add('off'); }, 6000);
    }
    box.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b) return;
      apply(b.getAttribute('data-t')); sync();
    });
    sync();
  });
})();
