(function(){
  document.designMode='on';
  const s=document.createElement('style');
  s.innerHTML=`body::before{content:'✏%EF%B8%8F Modo de Edição (aperte ESC pra encerrar)';z-index:9999;padding:10px;background:white;color:black;display:block;margin:10px;font-size:18px;border:2px solid orange;text-align:center;}`;
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
