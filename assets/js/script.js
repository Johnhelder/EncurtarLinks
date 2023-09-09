function encurtarUrl(){
  //validar se o link existe
  let url = document.getElementById("input-url").value;
  if(!url){
    alert("É necessário informar URL para encurtar");
    return;
  }
}

function copiar(){
  let inputUrl = document.getElementById("input-url");

  inputUrl.select();
  inputUrl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(inputUrl.value);

  alert(`URL copiada : ${inputUrl.value}`);
}

//df39c3b1631648b49a62ce1394d57992

//headers
let headers = {
  "Content-Type": "application",
  "apikey": "df39c3b1631648b49a62ce1394d57992"
}

//dados

let linkRequest = {
  description: url, 
  domain: {fullName: 'rebrand.ly'}
}