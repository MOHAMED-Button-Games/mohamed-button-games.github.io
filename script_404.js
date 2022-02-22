ID = "css_change"

if (navigator.userAgent.indexOf("Chrome") != -1)
{
	if (!document.getElementById(ID))
	{
		var head   = document.getElementsByTagName('head')[0]
		var link   = document.createElement('link')
		link.id    = ID;
		link.rel   = "stylesheet"
		link.type  = "text/css"
		link.href  = "style.css"
		head.appendChild(link)
	}
}
else
{
	if (!document.getElementById(ID))
	{
		var head   = document.getElementsByTagName('head')[0]
		var link   = document.createElement('link')
		link.id    = ID;
		link.rel   = "stylesheet"
		link.type  = "text/css"
		link.href  = "Undefined/style_Undefined.css"
		head.appendChild(link)
	}
	document.getElementById("0").href = "index"
	document.getElementById("1").href = "Games_Undefined"
	document.getElementById("2").href = "Videos_Undefined"
	document.getElementById("3").href = "About_Undefined"
}
