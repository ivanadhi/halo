const aku = document.getElementById('sini')
aku.addEventListener('click',function (){
    alert('KALO NGERASA GIMANA-GIMANA HUBUNGIN INI AJA YAA EHEHEHE :)')
    window.location.href='https://wa.me/6281271573203'
})



const hadiah = document.getElementById('explore')
hadiah.addEventListener('click', function(){
alert('SIAP SAYANG???')
window.location.href='bonus.html'
})

window.onload = function() {
    const audio = document.getElementById('bgMusic');
    audio.play().catch(function(error) {
        console.log('Autoplay was prevented. User interaction is required.');
    });
};