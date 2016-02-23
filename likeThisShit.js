var happy = document.getElementsByClassName('_48-k UFILikeLink');
var index = happy.length;
var postLiked = 0;
function likeThisShit(happy, ind)
{
	if(ind < index)
	{
		if (happy[ind].className != "_48-k UFILikeLink UFILinkBright") {
			happy[ind].click();
			postLiked += 1;
		}
		ind++;
		var timeout = 800;
		timeout += parseInt(Math.random() * 400);
		setTimeout(function(){likeThisShit(happy, ind)}, timeout);
	}
	else
	{
		alert("Fini. <3\nJust liked " + postLiked + "posts.");
	}
}
likeThisShit(happy, 0);
