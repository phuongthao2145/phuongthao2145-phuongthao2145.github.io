// --- ĐIỀU HƯỚNG MENU ---
function showEx(id,e) {
    document.querySelectorAll('.exercise-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.sidebar li').forEach(l => l.classList.remove('active'));
    document.querySelector('#ex' + id).classList.add('active');
    e.currentTarget.classList.add('active');
}

