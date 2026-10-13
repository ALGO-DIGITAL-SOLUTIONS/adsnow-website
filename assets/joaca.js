/* Hidden play on adsnow.ro. Everything here is optional: the page reads and converts without it,
   and visitors who ask for reduced motion get the calm version. */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var WA = 'https://wa.me/40771587498?text=';

  // 1. A greeting for the hour, then the plain kicker
  var kicker = document.querySelector('.hero-kicker');
  if(kicker){
    var h = new Date().getHours();
    var hello = h >= 5 && h < 11 ? 'Bună dimineața din Brașov.' : h < 18 && h >= 11 ? 'Bună ziua din Brașov.' : h >= 18 && h < 23 ? 'Seară bună din Brașov.' : 'Lucrezi până târziu? Și noi.';
    var plain = kicker.textContent;
    kicker.innerHTML = '<span class="kk"><span class="kk-a">' + hello + '</span><span class="kk-b">' + plain + '</span></span>';
    kicker.setAttribute('aria-label', plain);
    setTimeout(function(){ kicker.firstChild.classList.add('swap'); }, reduce ? 0 : 3400);
  }

  // 2. The lens: words near the cursor show the typeface's second nature
  var heads = document.querySelectorAll('.split');
  heads.forEach(function(el){
    el.querySelectorAll('.w > span').forEach(function(s){ s.classList.add('c'); });
  });
  if(canHover && !reduce){
    heads.forEach(function(el){
      var words = [], raf = 0, px = 0, py = 0;
      function measure(){
        words = Array.prototype.map.call(el.querySelectorAll('.c'), function(s){
          var r = s.getBoundingClientRect();
          return { s: s, x: r.left + r.width / 2, y: r.top + r.height / 2, k: 0 };
        });
      }
      function paint(){
        raf = 0;
        var R = parseFloat(getComputedStyle(el).fontSize) * 2.2;
        var it = document.documentElement.getAttribute('data-type') === 'prieten';
        words.forEach(function(w){
          var dx = (w.x - px) * 0.6, dy = w.y - py;
          var k = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / R);
          k = Math.round(k * 20) / 20;
          if(k !== w.k){ w.k = k; w.s.style.setProperty('--k', k); }
          w.s.classList.toggle('it', it && k > 0.55);
        });
      }
      el.addEventListener('pointerenter', function(e){ if(e.pointerType === 'mouse') measure(); });
      el.addEventListener('pointermove', function(e){
        if(e.pointerType !== 'mouse') return;
        px = e.clientX; py = e.clientY;
        if(!raf) raf = requestAnimationFrame(paint);
      });
      el.addEventListener('pointerleave', function(){
        words.forEach(function(w){ w.k = 0; w.s.style.setProperty('--k', 0); w.s.classList.remove('it'); });
      });
    });
  }

  // 3. The wave: once per headline (the hero always, the rest on touch screens, where there is no cursor)
  if(!reduce && 'IntersectionObserver' in window){
    var wio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting) return;
        var el = e.target; wio.unobserve(el);
        setTimeout(function(){
          el.classList.add('wave');
          var cs = el.querySelectorAll('.c'), last = cs[cs.length - 1];
          if(last) last.addEventListener('animationend', function(){ el.classList.remove('wave'); }, { once: true });
        }, 1300);
      });
    }, { threshold: 0.6 });
    heads.forEach(function(el){ if(el.closest('.hero') || !canHover) wio.observe(el); });
  }

  // 4. Viewfinder: project shots pull focus as they come in
  var shots = document.querySelectorAll('.w-media:not(.logo)');
  shots.forEach(function(m){
    m.insertAdjacentHTML('beforeend', '<span class="vf" aria-hidden="true"><i></i><i></i><i></i><i></i></span>');
    if(!reduce) m.classList.add('vfm');
  });
  if(!reduce && 'IntersectionObserver' in window){
    var vio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('af'); vio.unobserve(e.target); } });
    }, { threshold: 0.55 });
    shots.forEach(function(m){ vio.observe(m); });
  }

  // 5. Hover a WhatsApp button and Alex is already typing
  document.querySelectorAll('.btn-wa').forEach(function(b){
    var r = b.parentNode.querySelector('.reply');
    if(!r) return;
    var txt = r.innerHTML;
    b.addEventListener('mouseenter', function(){ r.classList.add('typing'); r.innerHTML = 'Alex scrie<span class="dots"><b></b><b></b><b></b></span>'; });
    b.addEventListener('mouseleave', function(){ r.classList.remove('typing'); r.innerHTML = txt; });
  });

  // 6. Type "alex" anywhere: the logo says hi and the door opens
  var buf = '', toast;
  document.addEventListener('keydown', function(e){
    if(/input|textarea|select/i.test(e.target.tagName) || e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-4);
    if(buf !== 'alex') return;
    if(window.adsParticles) window.adsParticles.say('Salut!');
    if(!toast){
      toast = document.createElement('div');
      toast.className = 'toast'; toast.setAttribute('role', 'status');
      toast.innerHTML = '<span>M-ai găsit. Eu sunt Alex și răspund în câteva momente.</span><a href="' + WA + encodeURIComponent('Salut Alex! Te-am găsit pe site.') + '" target="_blank" rel="noopener">Scrie-mi</a>';
      document.body.appendChild(toast);
    }
    requestAnimationFrame(function(){ toast.classList.add('on'); });
    clearTimeout(toast.t); toast.t = setTimeout(function(){ toast.classList.remove('on'); }, 7000);
  });

  // 7. Leave the tab and the coffee waits for you
  var title = document.title;
  document.addEventListener('visibilitychange', function(){
    document.title = document.hidden ? 'Cafeaua e încă caldă ☕ · ADSNOW' : title;
  });

  // 8. The very bottom
  var bar = document.querySelector('.foot-bar');
  if(bar && 'IntersectionObserver' in window){
    var end = document.createElement('span');
    end.className = 'foot-end'; end.textContent = 'Ai citit până la capăt. Respect.';
    bar.appendChild(end);
    var eio = new IntersectionObserver(function(es){ if(es[0].isIntersecting){ end.classList.add('on'); eio.disconnect(); } }, { threshold: 1 });
    eio.observe(end);
  }

  // 9. For the ones who open DevTools
  try {
    console.log('%cSalut, curiosule.%c\nDacă ai deschis consola pe site-ul unei agenții, ne-am înțelege bine.\nScrie-mi: https://wa.me/40771587498  · Alex',
      'font: 600 20px system-ui; color: #1456a3', 'font: 14px system-ui; color: #636466');
  } catch(e){}
})();
