async function loadDonors() {
  try {
    const donors = await fetchAllDonors();
    const tbody = document.querySelector('#donorTable tbody');
    tbody.innerHTML = '';
    donors.forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${d.id}</td><td>${d.name}</td><td>${d.blood_group}</td><td>${d.contact}</td><td>${d.city ?? ''}</td>`;
      tbody.appendChild(tr);
    });
  } catch (err) {
    document.getElementById('msg').innerHTML = `<div class="alert error">${err.message}</div>`;
  }
}

window.addEventListener('load', loadDonors);
