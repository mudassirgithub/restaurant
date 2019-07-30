$(function() {
    $('input[name=item1-quantity]').focus(function() {
        $('input[name=item1][value=101]').prop('checked', true);
    });

});

$(function() {
    $('input[name=item2-quantity]').focus(function() {
        $('input[name=item2][value=102]').prop('checked', true);
    });

});

$(function() {
    $('input[name=item3-quantity]').focus(function() {
        $('input[name=item3][value=103]').prop('checked', true);
    });

});

$(function() {
    $('input[name=item4-quantity]').focus(function() {
        $('input[name=item4][value=104]').prop('checked', true);
    });

});

$(function() {
    $('input[name=item5-quantity]').focus(function() {
        $('input[name=item5][value=105]').prop('checked', true);
    });

});

$(function() {
    $('input[name=item6-quantity]').focus(function() {
        $('input[name=item6][value=106]').prop('checked', true);
    });

});



var today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);



