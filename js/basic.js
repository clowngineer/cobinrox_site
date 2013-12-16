/*
  Robin Cox
  WEBD-234
  Franklin University
  Basic JavaScript functions.

*/
/*
* Execute at load time
*/
window.onload = doOnloadStuff;

/*
 *  Sets up menu item links so that when clicked,
 *  alerts user that feature/link not available yet.
*/
function doOnloadStuff()
{
   console.log("onload ");
   if( !document.getElementsByClassName ) return ;
   var menuAnchors = document.getElementsByClassName('menu_item');
   console.log("found " + menuAnchors.length + " menu+items");
   for( var i=0; i < menuAnchors.length; i++ )
   {
      menuAnchors[i].onclick = function()
      {
        alert("Sorry page not available yet!");
      };
   }
}