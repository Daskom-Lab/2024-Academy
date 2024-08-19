function greeting(name, language) {
    if (language === "English") {
      return `Good Morning ${name}!`;
    } else if (language === "French") {
      return `Bonjour ${name}!`;
    } else {
      return `Selamat Pagi ${name}!`;
    }
  }

function Pertanyaan(angka, huruf){
    if(angka == "1"){
        return `Salam telco ${angka}`;
    }
    else if(angka =="2"){
        return huruf;
    }
    switch (huruf) {
        case 1:
            message = 'salam pantek';
            break;
    
        default:
            message = 'apo de ang'
            break;
    }
}
  
  const name = prompt("Enter your name:");
  const language = prompt("Enter the language (English/French):");
  
  const greetingMessage = greeting(name, language);
  alert(greetingMessage);

  const angka = prompt("Pilih 1 atau 2!!!");
  const huruf = prompt("Masukkan huruf!!!");

  const sapa = angka;
  alert(huruf);

  console.log("asu");