var push = require('web-push');

let vapidKey = {
  publicKey: 'BLvAO65_zxxXM7wdai5CbINTsrLrcAjpUV4kz2v_w6ppAodzemiioYOQNREED5XgJD-Ly-EsO_e4UcKnh5qaG3s',
  privateKey: 'L9iCiaU5qWEr6rRC3eVVsC81koxDJPMpSaSHrAu5xpE'
}

push.setVapidDetails('mailto:rahmankhan1607@gmail.com',vapidKey.publicKey,vapidKey.privateKey);

let sub =[];

push.sendNotification(sub , 'test message');