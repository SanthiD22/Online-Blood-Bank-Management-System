document.getElementById('submitBtn').addEventListener('click', async () => {
  const donor = {
    name: document.getElementById('name').value.trim(),
    blood_group: document.getElementById('bloodGroup').value,
    contact: document.getElementById('contact').value.trim(),
    city: document.getElementById('city').value.trim()
  };

  const msgEl = document.getElementById('msg');

  if (!donor.name || !donor.contact) {
    msgEl.innerHTML = '<div class="alert error">Name and Contact are required.</div>';
    return;
  }

  try {
    const saved = await postDonor(donor);
    msgEl.innerHTML = `<div class="alert">Donor registered (ID: ${saved.id}).</div>`;
    document.getElementById('name').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('city').value = '';
  } catch (err) {
    msgEl.innerHTML = `<div class="alert error">${err.message}</div>`;
  }
});
