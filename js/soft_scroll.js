const div = document.querySelector( 'header > div' );
let prevY = window.scrollY;
window.addEventListener('scroll', function( ){
if( window.scrollY > 60 ){
    div.classList.add('solid');
}else{
    div.classList.remove('solid');
}
prevY = window.scrollY;
} );
