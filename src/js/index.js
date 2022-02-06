jQuery(document).ready(function ($) {
    (function initPlayVideo() {
        let $videoCover = $(".btn-play");
        let $videoPlayerIframe = $(".video-container");
        let $videoText = $(".btn-join");
        let $videoButton = $(".text-container");

        $videoCover.on("click", function () {
            $videoCover.fadeOut();
            $videoButton.fadeOut();
            $videoText.fadeOut();
            $videoPlayerIframe[0].src += "&autoplay=1";
        });
    })();
});


let form_fields = document.getElementsByTagName('input')
form_fields[0].placeholder = 'First name...';
form_fields[1].placeholder = 'Last name...';
form_fields[2].placeholder = 'Enter email...';
form_fields[3].placeholder = 'Comment...';


for (let field in form_fields) {
    form_fields[field].className += ' form-control'
}

// Submit subscription form using Ajax
$('#subscription_form').on('submit', function (e) {
    e.preventDefault();
    let $form = $(this);
    $.ajax({
        type: 'POST',
        url: 'subscription_ajax.php',
        data: $form.serialize()
    }).done(function () {
        $form[0].reset()
        alert('Thank you for the subscription!')
    }).fail(function () {
        alert('Something went wrong')
    });
});