(function(){
  document.designMode='on';
  const s=document.createElement('style');
  s.innerHTML=`body::before{content:'✏️ Edit Mode (ESC pra encerrar)';z-index:64;max-width:200px;padding:20px;background:white;color:black;display:block;margin:20px;font-size:18px;border:2px solid SteelBlue;}`;
  document.body.appendChild(s);
  window.scrollTo(0,0);
  document.addEventListener('keyup',e => {
    if(e.key==='Escape'){
      document.designMode='off';
      s.remove();
      document.removeEventListener('keyup',e);
    }
  });
})();
