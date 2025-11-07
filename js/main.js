(function() {
  var $modal = $('#imageModal');
  var $img = $('#imageModal img');
  var $title = $('#imageModalLabel');
  $(document).on('click', '.card-img-top, .hero-img', function() {
    var src = this.getAttribute('src');
    var alt = this.getAttribute('alt') || 'Podgląd zdjęcia';
    $img.attr('src', src);
    $img.attr('alt', alt);
    $title.text(alt);
    $modal.modal('show');
  });

  $modal.on('hidden.bs.modal', function () {
    $img.attr('src', '');
    $img.attr('alt', '');
    $title.text('Podgląd');
  });
})();