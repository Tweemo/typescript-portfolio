function getViewport() {

  var viewPortWidth;
 
  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  if (typeof window.innerWidth != 'undefined') {
    viewPortWidth = window.innerWidth
  }
 
 // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (typeof document.documentElement != 'undefined'
  && typeof document.documentElement.clientWidth !=
  'undefined' && document.documentElement.clientWidth != 0) {
     viewPortWidth = document.documentElement.clientWidth
  }
 
  // older versions of IE
  else {
    viewPortWidth = document.getElementsByTagName('body')[0].clientWidth
  }
  return viewPortWidth;
 }

 export default getViewport;