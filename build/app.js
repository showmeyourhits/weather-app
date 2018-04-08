!function(){"use strict";new Worker("./worker.js").onmessage=function(e){console.log("Recieved from worker",e.data)}}();
