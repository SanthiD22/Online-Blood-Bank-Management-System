document.getElementById('searchBtn').addEventListener('click', async () => {
  const group = document.getElementById('qgroup').value;
  const resEl = document.getElementById('results');
  resEl.innerHTML = 'Searching...';
  try {
    const donors = await fetchDonorsByGroup(group);
    if (!donors.length) {
      resEl.innerHTML = '<div class="alert">No donors found for this blood group.</div>';
      return;
    }
    let html = '<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Contact</th><th>City</th></tr></thead><tbody>';
    donors.forEach(d => {
      html += `<tr><td>${d.id}</td><td>${d.name}</td><td>${d.contact}</td><td>${d.city ?? ''}</td></tr>`;
    });
    html += '</tbody></table>';
    resEl.innerHTML = html;
  } catch (err) {
    resEl.innerHTML = `<div class="alert error">${err.message}</div>`;
  }
});
