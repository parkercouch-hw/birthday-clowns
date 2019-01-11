document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();
  const nav = document.querySelectorAll('.sidenav');
  const sideNav = M.Sidenav.init(nav, {});

  const date = document.querySelectorAll('.datepicker');
  const datePicker = M.Datepicker.init(date, {
    yearRange: [1900, now.getFullYear()],
    maxDate: now,
    format: 'yyyy-mm-dd',
    autoClose: true,
  });

  const errors = [...document.querySelectorAll('.error-msg')];
  if(errors) {
    errors.forEach(msg => {
      M.toast({
        html: msg.textContent,
        classes: 'red lighten-2 rounded align-center',
        displayLength: 5000,
        inDuration: 500,
        outDuration: 500,
      })
    })
  }

  const successes = [...document.querySelectorAll('.success-msg')];
  if(successes) {
    successes.forEach(msg => {
      M.toast({
        html: msg.textContent,
        classes: 'green lighten-2 rounded align-center',
        displayLength: 5000,
        inDuration: 500,
        outDuration: 500,
      })
    })
  }

});