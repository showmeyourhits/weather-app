const worker = new Worker('./worker.js');

worker.onmessage = function(event) {
    console.log('Recieved from worker', event.data);
}

export {worker};
