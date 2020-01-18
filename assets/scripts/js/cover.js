
//loading screen handleing

var loadingScreen = document.querySelector('.loader');

window.addEventListener('load', hideLoadingScreen);

function hideLoadingScreen()
{
	loadingScreen.classList.add('hidden');

	window.setTimeout(removeLoadingScreen, 1000);
}
function removeLoadingScreen()
{
	loadingScreen.style.display = 'none';
}

//navigation handeling

var navigation = document.querySelector('.nav');

window.setInterval(setNavOpacityBehavior, 100);

function setNavOpacityBehavior()
{
	if (window.scrollY == 0)
	{
		navigation.style.opacity = 1;
	}
	else
	{
		navigation.style.removeProperty('opacity');
	}
}
