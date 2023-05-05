copynumber.addEventListener("click", numberFunction);
copygmail.addEventListener("click", gmailFunction);
copyoutlook.addEventListener("click", outlookFunction);

function numberFunction() {
    var copied = document.getElementById("copynumber").innerText
    var input = document.createElement('textarea');
    input.value = copied;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showCopiedText();
}

function gmailFunction() {
    var copied = document.getElementById("copygmail").innerText
    var input = document.createElement('textarea');
    input.value = copied;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showCopiedText();
}

function outlookFunction() {
    var copied = document.getElementById("copyoutlook").innerText
    var input = document.createElement('textarea');
    input.value = copied;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showCopiedText();
}

function showCopiedText() {
    var copiedPopUp = document.getElementById("copiedPopUp");
    copiedPopUp.classList.remove("hiddenPop");
    copiedPopUp.classList.add("visible");
    setTimeout(function() {
      copiedPopUp.classList.remove("visible");
      copiedPopUp.classList.add("hiddenPop");
    }, 3000);
  }

  
  function imprimir() {
    window.print();
  }