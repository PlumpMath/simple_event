window.onload = function() {
  document.addEventListener('keyup', function(e) {
    var keyCode = e.which || e.keyCode;

    if (keyCode === 13) {
      var inputContent = document.querySelector('input').value;

      alert(inputContent);
    }
  });
};
