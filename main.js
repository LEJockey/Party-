// Handling the side bar of the site  
$(function () {
    let sideBarWidth = $('.sidebar-content').innerWidth()
    $('.sidebar').css('left', -sideBarWidth)

    $('.openbtn').click(function () { 
        if ( $('.sidebar').css('left') ===  '0px') {
            $('.sidebar').animate({left: -sideBarWidth}, 1000)
        }
        else $('.sidebar').animate({left: '0px'}, 1000)  
    });
    
    $('.closebtn').click(function (e) { 
        if ($('.sidebar').css('left') ===  '0px') {
            $('.sidebar').animate({left: -sideBarWidth}, 1000)
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('#singers').offset().top - 368 ) {
            $('.openbtn').html('☰').css('color', 'rgba(214, 46, 51, 0.85)')
        } else $('.openbtn').html('☰ open').css('color', '#fff')
    })

    
    // Handling CountDown of the party start:
    let upComingDate = new Date('Dec 31, 2024 23:59:59').getTime()
    let countDown = setInterval(() => {
        let currentDate = new Date().getTime()
        let diff = upComingDate - currentDate
        let countDays = Math.floor(diff / (1000 * 60 * 60 * 24) ) 
        let countHours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
        let countMinutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60))
        let countSeconds = Math.floor(diff % (1000 * 60) / (1000))
        $('.countDays h3').html(countDays >= 10 ? countDays + ' d' : `0${countDays} d`);
        $('.countHours h3').html(countHours >= 10 ? countHours + ' hr' : `0${countHours} hr`);
        $('.countMinutes h3').html(countMinutes  >= 10 ? countMinutes + ' min'  : `0${countMinutes } min`);
        $('.countSeconds h3').html(countSeconds  >= 10 ? countSeconds + ' sec' : `0${countSeconds } sec`);    
        if (diff < 0 ) {
            clearInterval(countDown)
            $('#countsec .row').html(`<h2 class='text-white text-center'>Let's begin the party</h2>`)
            $('#countsec .container').addClass('d-flex align-items-center justify-content-center')
        }
    }, 1000);


    // Handling Max characters of the message in contact section:
    let maxChar = $('textarea').attr('maxlength');
    $('textarea').keyup(function () { 
        let charLength = $('textarea').val().length
        let remChar = maxChar - charLength
        $('#char').html(remChar)
    });
});






























