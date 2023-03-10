// TUGAS JAVASCRIPT

// Silakan lengkapi kode javascript konversi untuk "panjang" berikut:

$("#btnHitung").click(function () {
  // Buat variable yang isinya "selector" dari element, variable akan dipakai untuk logika operasi hitung

  var op1 = $("#op1").val();
  var op2 = $("#op2").val();
  var num = $("#num").val();
  var hasil = $("#hasil");

  // Buat logika operasi hitung

  //KILO METER ==================================================
  // KM TO HM
  if (op1 == 1 && op2 == 2) {
    hasil.val(parseInt(num) * 10);
  }

  // KM TO DAM
  if (op1 == 1 && op2 == 3) {
    hasil.val(parseInt(num) * 100);
  }

  // KM TO M
  if (op1 == 1 && op2 == 4) {
    hasil.val(parseInt(num) * 1000);
  }

  // KM TO DM
  if (op1 == 1 && op2 == 5) {
    hasil.val(parseInt(num) * 10000);
  }

  // KM TO CM
  if (op1 == 1 && op2 == 6) {
    hasil.val(parseInt(num) * 100000);
  }

  // KM TO MM
  if (op1 == 1 && op2 == 7) {
    hasil.val(parseInt(num) * 1000000);
  }

  //HEKTOMETER ==================================================
  // HM TO KM
  if (op1 == 2 && op2 == 1) {
    hasil.val(parseInt(num) / 10);
  }

  // HM TO DAM
  if (op1 == 2 && op2 == 3) {
    hasil.val(parseInt(num) * 10);
  }

  // HM TO M
  if (op1 == 2 && op2 == 4) {
    hasil.val(parseInt(num) * 100);
  }

  // HM TO DM
  if (op1 == 2 && op2 == 5) {
    hasil.val(parseInt(num) * 1000);
  }

  // HM TO CM
  if (op1 == 2 && op2 == 6) {
    hasil.val(parseInt(num) * 10000);
  }

  // HM TO MM
  if (op1 == 2 && op2 == 7) {
    hasil.val(parseInt(num) * 100000);
  }

  //DEKAMETER ==================================================
  // DAM TO KM
  if (op1 == 3 && op2 == 1) {
    hasil.val(parseInt(num) / 100);
  }

  // DAM TO HM
  if (op1 == 3 && op2 == 2) {
    hasil.val(parseInt(num) / 10);
  }

  // DAM TO M
  if (op1 == 3 && op2 == 4) {
    hasil.val(parseInt(num) * 10);
  }

  // DAM TO DM
  if (op1 == 3 && op2 == 5) {
    hasil.val(parseInt(num) * 100);
  }

  // DAM TO CM
  if (op1 == 3 && op2 == 6) {
    hasil.val(parseInt(num) * 1000);
  }

  // DAM TO MM
  if (op1 == 3 && op2 == 7) {
    hasil.val(parseInt(num) * 10000);
  }

  //METER ==================================================
  // M TO KM
  if (op1 == 4 && op2 == 1) {
    hasil.val(parseInt(num) / 1000);
  }

  // M TO HM
  if (op1 == 4 && op2 == 2) {
    hasil.val(parseInt(num) / 100);
  }

  // M TO DAM
  if (op1 == 4 && op2 == 3) {
    hasil.val(parseInt(num) / 10);
  }

  // M TO DM
  if (op1 == 4 && op2 == 5) {
    hasil.val(parseInt(num) * 10);
  }

  // M TO CM
  if (op1 == 4 && op2 == 6) {
    hasil.val(parseInt(num) * 100);
  }

  // M TO MM
  if (op1 == 4 && op2 == 7) {
    hasil.val(parseInt(num) * 1000);
  }

  //DESIMETER ==================================================
  // DM TO KM
  if (op1 == 5 && op2 == 1) {
    hasil.val(parseInt(num) / 10000);
  }

  // DM TO HM
  if (op1 == 5 && op2 == 2) {
    hasil.val(parseInt(num) / 1000);
  }

  // DM TO DAM
  if (op1 == 5 && op2 == 3) {
    hasil.val(parseInt(num) / 100);
  }

  // DM TO M
  if (op1 == 5 && op2 == 4) {
    hasil.val(parseInt(num) / 10);
  }

  // DM TO CM
  if (op1 == 5 && op2 == 6) {
    hasil.val(parseInt(num) * 10);
  }

  // DM TO MM
  if (op1 == 5 && op2 == 7) {
    hasil.val(parseInt(num) * 100);
  }

  //CENTIMETER ==================================================
  // CM TO KM
  if (op1 == 6 && op2 == 1) {
    hasil.val(parseInt(num) / 100000);
  }

  // CM TO HM
  if (op1 == 6 && op2 == 2) {
    hasil.val(parseInt(num) / 10000);
  }

  // CM TO DAM
  if (op1 == 6 && op2 == 3) {
    hasil.val(parseInt(num) / 1000);
  }

  // CM TO M
  if (op1 == 6 && op2 == 4) {
    hasil.val(parseInt(num) / 100);
  }

  // CM TO DM
  if (op1 == 6 && op2 == 5) {
    hasil.val(parseInt(num) / 10);
  }

  // CM TO MM
  if (op1 == 6 && op2 == 7) {
    hasil.val(parseInt(num) * 10);
  }

  //MILIMETER ==================================================
  // MM TO KM
  if (op1 == 7 && op2 == 1) {
    hasil.val(parseInt(num) / 1000000);
  }

  // MM TO HM
  if (op1 == 7 && op2 == 2) {
    hasil.val(parseInt(num) / 100000);
  }

  // MM TO DAM
  if (op1 == 7 && op2 == 3) {
    hasil.val(parseInt(num) / 10000);
  }

  // MM TO M
  if (op1 == 7 && op2 == 4) {
    hasil.val(parseInt(num) / 1000);
  }

  // MM TO DM
  if (op1 == 7 && op2 == 5) {
    hasil.val(parseInt(num) / 100);
  }

  // MM TO CM
  if (op1 == 7 && op2 == 6) {
    hasil.val(parseInt(num) / 10);
  }
});
