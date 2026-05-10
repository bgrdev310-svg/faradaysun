const https = require('https');
https.get('https://solar-panel-dh2.pages.dev/', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const match = data.match(/href="(\/assets\/index-[^\"]+\.css)"/);
    if (match) {
      https.get('https://solar-panel-dh2.pages.dev' + match[1], (r) => {
        let css = '';
        r.on('data', (c) => css += c);
        r.on('end', () => require('fs').writeFileSync('hosted.css', css));
      });
    } else {
        console.log('No CSS match found');
    }
  });
});
