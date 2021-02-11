// Pengambilan dari HTML
let hasil = document.querySelector('.hasil h1');
let style = document.querySelector('.hasil');
let player = document.querySelectorAll('.player img');
let computer = document.querySelectorAll('.computer img');
let refresh = document.querySelectorAll('.refresh img');
// Akhir Pengambilan Html
class sistem {
    constructor (player,computer) {
        this.player = player;
        this.computer = computer;
    }
    sistem() {
        if (this.player == this.computer) return 'SERI!';
        if (this.player == 'batu') return (this.computer == 'gunting') ? 'PLAYER 1 WIN' : 'COMP WIN';
        if (this.player == 'kertas') return (this.computer == 'batu') ? 'PLAYER 1 WIN' : 'COMP WIN';
        if (this.player == 'gunting') return (this.computer == 'guntkeing') ? 'PLAYER 1 WIN' : 'COMP WIN';
    }
}
class random {
    comp () {
        let pilihan = ['batu','gunting','kertas'];
        // Random
        let angka_random = Math.floor(Math.random()*pilihan.length);
        let tempat = Math.floor(Math.random()*pilihan.length);
        let random = pilihan[angka_random];
        // Akhir Random
        let set =  computer[tempat].setAttribute('src','IMG/' + `${random}.png`);
        let style = computer[tempat].classList.add('active');
        let asli =  setTimeout(function(){
            posisi[tempat].classList.remove('active');
        },2000);
        return random;
    }
    background () {
        if (isi.innerHTML == "SERI!") {
            hasilcek.classList.add('draw');
            setTimeout(function(){
                hasilcek.classList.remove ('draw');
            },1500);
        }else if (isi.innerHTML == "PLAYER 1 WIN") {
            hasilcek.classList.add('win');
            setTimeout(function(){
                hasilcek.classList.remove ('win');
            },1500);
        }else if (isi.innerHTML == "COMP WIN") {
            hasilcek.classList.add('win');
            setTimeout(function(){
                hasilcek.classList.remove ('win');
            },1500);
        }
    }
    
}