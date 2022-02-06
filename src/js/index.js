// Submit subscription form using Ajax
$('#subscription_form').on('submit', function (e) {
    e.preventDefault();
    let $form = $(this);
    $.ajax({
        type: 'POST',
        url: '/subscription_ajax.php',
        data: $form.serialize()
    }).done(function () {
        $form[0].reset()
        alert('Thank you for the subscription!')
    }).fail(function () {
        alert('Something went wrong')
    });
});