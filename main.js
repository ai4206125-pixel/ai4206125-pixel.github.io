(function(){
  const burger = document.querySelector('[data-burger]');
  const panel = document.querySelector('[data-mobile]');
  if(burger && panel){
    burger.addEventListener('click', () => {
      const open = panel.getAttribute('data-open') === '1';
      panel.setAttribute('data-open', open ? '0' : '1');
      panel.style.display = open ? 'none' : 'block';
      burger.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  // Simple mailto for form: replace with your booking system later.
  const form = document.querySelector('[data-booking-form]');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [];
      for(const [k,v] of data.entries()){
        lines.push(k + ': ' + v);
      }
      const subject = encodeURIComponent('Бронь фотостудии «Монохром»');
      const body = encodeURIComponent(lines.join('\n'));
      // TODO: change email here
      window.location.href = 'mailto:hello@monochrom.studio?subject=' + subject + '&body=' + body;
    });
  }
})();