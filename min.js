function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

if('serviceWorker' in navigator && 'PushManager' in window){
	console.log('push and service worker are working fine');
}

addEventListener('load', async() =>{

let sw = await navigator.serviceWorker.register('./sw.js');
console.log(sw);
})

async function subscribe(){
	let serviceReady = await navigator.serviceWorker.ready;
	
	let applicationServerPublicKey =  urlB64ToUint8Array('BLvAO65_zxxXM7wdai5CbINTsrLrcAjpUV4kz2v_w6ppAodzemiioYOQNREED5XgJD-Ly-EsO_e4UcKnh5qaG3s')
	
	let push = await serviceReady.pushManager.subscribe({
		
		userVisibilityOnly: true,
		applicationServerKey: applicationServerPublicKey
	});
	
	console.log(JSON.stringify(push));
}