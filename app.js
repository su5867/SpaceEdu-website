// Shared behaviour for every SpaceEdu page: burger nav + scroll reveal.
(function(){
  var navrow=document.querySelector('.navrow');
  var burger=document.querySelector('.burger');
  if(navrow&&burger){
    function set(open){
      navrow.dataset.open=open?'true':'false';
      burger.setAttribute('aria-expanded',open?'true':'false');
      burger.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    }
    set(false);
    burger.addEventListener('click',function(e){
      e.stopPropagation();
      set(navrow.dataset.open!=='true');
    });
    document.addEventListener('click',function(e){
      if(navrow.dataset.open==='true' && !navrow.contains(e.target)) set(false);
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape' && navrow.dataset.open==='true'){ set(false); burger.focus(); }
    });
    navrow.querySelectorAll('.links a').forEach(function(a){
      a.addEventListener('click',function(){ set(false); });
    });
  }

  if(!window.matchMedia||!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var els=document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window && els.length){
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
        });
      },{threshold:.15});
      els.forEach(function(el){ io.observe(el); });
    } else {
      els.forEach(function(el){ el.classList.add('in'); });
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
