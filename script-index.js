document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  let password = document.getElementById('userPass').value; 

  if (password === "") {
    alert("GABOLEH KOSONG DONGGG");
    document.getElementById('userPass').value="" 
  } else if (password === "20112024") { 
    alert("CIE BENERRRR, JANLUPA UP VOLUMEE");
    window.location.href = 'mainPage.html'; 
  } else {
    alert('CLUE NYA HARI INI TANGGAL BERAPA HAYO')
    document.getElementById('userPass').value=""
  }
});

const salah = document.getElementById('main')
salah.addEventListener('click', function(){
  alert('ISI PASS DULU DONG CANTIK :3')
  window.location.href='index.html'
})

const salah2 = document.getElementById('main2')
salah2.addEventListener('click', function(){
  alert('KAMU MAU KONTAK AKU? WKKWWK ISI DULU AYUK')
  window.location.href='index.html'
})




