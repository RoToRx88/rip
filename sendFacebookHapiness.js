
var c = document.getElementsByClassName('uiTextareaNoResize');
var r = document.getElementById('u_0_x');
var a = "Je suis un petit nigga.";

function sendHapiness(chat, repondre, i)
{
	if (i > a.length) {
		alert("Fini. <3");
		return 0;
	}
  chat[0].value = a.substring(0, i);
  repondre.click();
  setTimeout(function(){sendHapiness(chat, repondre, i + 1)}, 50);
}

sendHapiness(c, r, 1);