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