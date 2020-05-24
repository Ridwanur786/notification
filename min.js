if('serviceWorker' in navigator && 'PushManager' in window){
	console.log('push and service worker are working fine');
}

addEventListener('load', async() =>{

let sw = await navigator.serviceWorker.register('./sw.js');
console.log(sw);
})
	
	function subscribeUserToPush() {
  return navigator.serviceWorker.register('./sw.js')
  .then(function(registration) {
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BLvAO65_zxxXM7wdai5CbINTsrLrcAjpUV4kz2v_w6ppAodzemiioYOQNREED5XgJD-Ly-EsO_e4UcKnh5qaG3s'
      )
    };

    return registration.pushManager.subscribe(subscribeOptions);
  })
  .then(function(pushSubscription) {
    console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
    return pushSubscription;
  });
}
	
	//console.log(JSON.stringify(push));
