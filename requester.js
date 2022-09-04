const http = require('http');

const data = JSON.stringify({
  todo: 'Buy the milk',
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/updatepositions',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();

//{"TargetList":[{"Name":"3DPrinter1","Position":{"x":7.697091102600098,"y":0.10000000149011612,"z":1.705034613609314}},{"Name":"3DPrinter2","Position":{"x":7.743790626525879,"y":0.10000000149011612,"z":0.32893723249435427}},{"Name":"Server1","Position":{"x":4.56647253036499,"y":0.10000000149011612,"z":3.5553698539733888}},{"Name":"Server2","Position":{"x":6.099250793457031,"y":0.10000000149011612,"z":3.5771117210388185}}]}
