//velox

$('#fox-1').text('Macrotis');

$('#fox-2').css('border-color', 'purple');

$('.velox p').css('background-color', 'yellow');

//directions

let color = 'purple';

let number = 10;

let word = 'cool';

if (color=='purple') {
    $('.red').css('background-color', 'purple');
}

if (number>100) {
    $('.yellow').text("whoah, that's a big number");
} else {
    $('.yellow').text("just a regular number, please.");
    
}

if (word=='cool') {
    $('.powerblue').text("Power of DOM");
} else {
    $('.cornflowerblue').text("Power of DOM");
}