const API_BASE = 'http://localhost:8080/api/donors';

async function postDonor(donor) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donor)
  });
  return res.json();
}

async function fetchAllDonors() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch donors');
  return res.json();
}

async function fetchDonorsByGroup(group) {
  const url = `${API_BASE}/${encodeURIComponent(group)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch donors by group');
  return res.json();
}
