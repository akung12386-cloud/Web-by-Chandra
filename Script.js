let hasil = document.getElementById('hasil');
let angkaSebelumnya = '';
let operatorSebelumnya = '';

function angka(angka) {
    hasil.value += angka;
}

function operator(operator) {
    angkaSebelumnya = hasil.value;
    operatorSebelumnya = operator;
    hasil.value = '';
}

function hitung() {
    let angkaSekarang = hasil.value;
    let hasilPerhitungan = eval(angkaSebelumnya + operatorSebelumnya + angkaSekarang);
    hasil.value = hasilPerhitungan;
}

function hapus() {
    hasil.value = '';
    angkaSebelumnya = '';
    operatorSebelumnya = '';
}