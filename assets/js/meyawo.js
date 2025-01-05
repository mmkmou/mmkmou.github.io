/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });

    $('#newsletter-form').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'https://hook.eu2.make.com/qhu0zizrwelld5t9j8s3ch786vkado90',
            type: 'post',
            data:$('#newsletter-form').serialize(),
            success: function (data, status, jqXHR) {
                $("#form-success").prepend('Merci pour votre inscription !!!');
                $('#form_id').trigger("reset");
            },
            error: function (jqXHR, status, err) {
                console.log(err)
            }
        });
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});