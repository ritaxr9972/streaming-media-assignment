const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const loadFile = (request, response, url, datatype) => {
  const file = fs.readFileSync(`${__dirname}/../client/${url}`);
  response.writeHead(200, { 'Content-Type': datatype });
  response.write(file);
  response.end();
};

const getPage2 = (request, response) => {
  loadFile(request, response, 'client2.html', 'text/html');
};

const getPage3 = (request,response) => {
  loadFile(request, response, 'client3.html', 'text/html');  
};

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;
