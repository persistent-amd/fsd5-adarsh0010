const http = require('http');

const PORT = 4000;

function sendJson(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // for development only
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });

    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    // CORS preflight response
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  if (req.url === '/login' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const { email, password } = body;

      if (!email || !password) {
        return sendJson(res, 400, {
          ok: false,
          message: 'Email and password are required',
        });
      }

      // Fake authentication; replace with real logic as needed.
      return sendJson(res, 200, {
        ok: true,
        message: 'Login successful',
        email,
      });
    } catch (err) {
      return sendJson(res, 400, {
        ok: false,
        message: 'Invalid JSON',
      });
    }
  }

  sendJson(res, 404, { ok: false, message: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}`);
});
