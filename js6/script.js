 let p = window
 for (let p in window) {
   if (window[p] != document) {
     console.log(window[p]);
   }
 }