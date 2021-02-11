// Pengambilan dari HTML
let hasil = document.querySelector(' .hasil h1');
let vs = document.querySelector('.awal');
let tampil = document.querySelector('.hasil');
let player = document.querySelectorAll('.player img');
let computer = document.querySelectorAll('.computer img');
let refresh = document.querySelector('.refresh img');
// Akhir Pengambilan Html
class sistemmain {
    sistem (player, computer) {
        if (player == computer) return 'SERI!';
        if ( player == 'batu') return (computer == 'gunting') ? 'PLAYER 1 WIN' : 'COMP WIN';
        if ( player == 'kertas') return (computer == 'batu') ? 'PLAYER 1 WIN' : 'COMP WIN';
        if ( player == 'gunting') return (computer == 'guntkeing') ? 'PLAYER 1 WIN' : 'COMP WIN';
    }  
}
class random extends sistemmain {
    computer () {
        let pilihan = ["batu", "gunting", "kertas"];
        let angkaComputer = Math.floor(Math.random()*pilihan.length);
        let angkaStyle = Math.floor(Math.random()*pilihan.length);
        let random = pilihan[angkaComputer];
        let acak = computer [angkaStyle].setAttribute('src', 'assets/' + `${random}.png`);
        let klik = computer [angkaStyle].classList.add('active');
        
            setTimeout(()=>{
                computer [angkaStyle].classList.remove('active');
            },2000);
    
        return random;
    }
}

let main = new sistemmain();
let bot = new random();




player.forEach(pemain => {
    pemain.addEventListener('click',()=>{
       let player = pemain.className;
       pemain.classList.add('active');
       setTimeout(()=>{
            pemain.classList.remove('active');
        },2000)
       let computer = bot.computer();
       let maingame = main.sistem(player, computer);
       console.log(`player : ${player}`);
       console.log(`computer : ${computer}`);
       console.log(`hasil : ${maingame}`);
       hasil.textContent = maingame;
       tampil.classList.remove('none');
       vs.classList.add('none')
       
            setTimeout(()=>{
                tampil.classList.add('none');
            },2000)
       
       
    })
});
refresh.addEventListener('click',()=>{
    refresh.animate([
        { transform: 'rotate(-180deg)'}
    ],
    {duration:500},
    {  iterations: Infinity}
    );
    vs.classList.remove('none')
    computer [0].setAttribute('src', 'assets/' + `batu.png`);
    computer [1].setAttribute('src', 'assets/' + `kertas.png`);
    computer [2].setAttribute('src', 'assets/' + `gunting.png`);
})