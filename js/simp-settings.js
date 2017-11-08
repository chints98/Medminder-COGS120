$(document).ready(function () {
    function init() {
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
        }
        if (localStorage["radio1"]) {
            $('#radio1').val(localStorage["radio1"]);
        }
        if (localStorage["radio2"]) {
            $('#radio2').val(localStorage["radio2"]);
        }
        if (localStorage["select"]) {
            $('#select').val(localStorage["select"]);
        }
        if (localStorage["textarea"]) {
           $('#textarea').val(localStorage["textarea"]);
        }
        if (localStorage["checkbox"]) {
           $('#checkbox').val(localStorage["checkbox"]);
        }
    }
    init();
});

$('.stored').keyup(function() {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#clear').click(function() {
  window.localStorage.clear();
  $('#localStorage').get(0).reset();
});