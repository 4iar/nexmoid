const Buffer = require('buffer/').Buffer;


function sendSms (credentials, sms, cb) {
  const body = JSON.stringify({
    api_key: credentials.apiKey,
    api_secret: credentials.apiSecret,
    to: sms.to,
    from: sms.from,
    text: sms.text
  });

  fetch('https://rest.nexmo.com/sms/json', {
    body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    },
  }).then(response => {
    cb({ err: null, response });
  }).catch(err => {
    cb({ err, response: null });
  });
}

export default sendSms;