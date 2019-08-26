function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var h1 = document.getElementById('h1');
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'img/morning.jpg';
        document.body.style.background = '#b0c057';
        h1.innerHTML = `Bom dia`;
        //mornig
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/afternoon.jpg';
        document.body.style.background = '#db958e'
        h1.innerHTML = `Boa tarde`;
        //afternoon
    } else {
        img.src = 'img/night.jpg';
        document.body.style.background = '#1c2553';
        h1.innerHTML = `Boa noite`;
        //night
    }
}