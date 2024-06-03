document.getElementById('shorten-btn').addEventListener('click', async function () {
  const url = document.getElementById('url-input').value;
  const accessToken = '95f2a6b5fa1e3b937f29e8e32b235586a3921016'; // Replace with your Bitly access token
  
  const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ long_url: url })
  });
  
  const data = await response.json();
  
  if (response.ok) {
      document.getElementById('short-url').textContent = data.link;
      document.getElementById('short-url').href = data.link;
      document.getElementById('result').classList.remove('hidden');
  } else {
      alert('Error: ' + data.message);
  }
});
