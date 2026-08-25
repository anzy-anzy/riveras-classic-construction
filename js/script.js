// Rivera's Classic Construction — site script

document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // gallery filters (gallery.html)
  var filterButtons = document.querySelectorAll('.gallery-filters button');
  var items = document.querySelectorAll('.gallery-item');
  if (filterButtons.length && items.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        items.forEach(function (item) {
          var cats = item.getAttribute('data-cat');
          if (filter === 'all' || cats.indexOf(filter) !== -1) {
            item.classList.add('show');
          } else {
            item.classList.remove('show');
          }
        });
      });
    });
  }

  // contact form (contact.html) - front-end only until connected to a form backend
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-success');
      if (note) {
        note.style.display = 'block';
      }
      form.reset();
    });
  }

  // footer year
  var yearEl = document.querySelector('#footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
