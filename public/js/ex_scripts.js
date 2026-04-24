// --- BÀI 1: DARK MODE ---
document.querySelector('#input-1').onchange = () => document.querySelector('#box-1').classList.toggle('dark-active');

// --- BÀI 2: SHOW PASSWORD ---
document.querySelector('#fa-2').onclick = function () {
    const input = document.querySelector('#input-2');
    const isPass = input.type === 'password';
    input.setAttribute('type', isPass ? 'text' : 'password');
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
};

// --- BÀI 3: CHAR COUNTER ---
document.querySelector('#input-3').oninput = function () {
    const len = this.value.length;
    const countEl = document.querySelector('#count-3');
    countEl.innerText = `${len} / 150 ký tự`;
    countEl.style.color = len > 150 ? 'red' : '#666';
};

// --- BÀI 4: CART ---
document.querySelector('#input-4').oninput = function () {
    const total = this.value * 25000000;
    document.querySelector('#total-4').innerText = total.toLocaleString();
};

// --- BÀI 5: SEARCH ---
document.querySelector('#input-5').oninput = function () {
    const key = this.value.toLowerCase();
    document.querySelectorAll('#list-5 li').forEach(li => {
        li.style.display = li.innerText.toLowerCase().includes(key) ? '' : 'none';
    });
};

// --- BÀI 6: MODAL & TOAST ---
const modal = document.querySelector('#modal-6');
document.querySelector('#btn-6-modal').onclick = () => modal.style.display = 'flex';
function closeModal() { modal.style.display = 'none'; }
function confirmDelete() { closeModal(); showToast("Đã xóa bài viết!"); }

document.querySelector('#btn-6-toast').onclick = () => showToast("Tin nhắn đã được gửi!");
function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'my-toast';
    t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

// --- BÀI 7: QUIZ ---
document.querySelector('#btn-7').onclick = () => {
    const ans = document.querySelector('input[name="q1"]:checked');
    alert(ans && ans.value === 'correct' ? "Chính xác! 👏" : "Sai rồi! Thử lại nhé.");
};

// --- BÀI 8: SLIDER ---
const imgs = ['10-800x300.jpg', '20-800x300.jpg', '30-800x300.jpg', '40-800x300.jpg'];
let idx = 0;
document.querySelector('#btn-8-next').onclick = () => { idx = (idx + 1) % imgs.length; document.querySelector('#slider-img').src = 'public/images/' + imgs[idx]; };
document.querySelector('#btn-8-prev').onclick = () => { idx = (idx - 1 + imgs.length) % imgs.length; document.querySelector('#slider-img').src = 'public/images/' + imgs[idx]; };

// --- BÀI 9: TODO ---
const btnAdd = document.querySelector('#btn-add-todo');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

btnAdd.addEventListener('click', function () {
    const taskText = todoInput.value.trim();

    // 1. Kiểm tra nếu người dùng chưa nhập gì thì không thêm
    if (taskText === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    // 2. Tạo chuỗi HTML cho phần tử mới (Sử dụng Template String ``)
    const taskHTML = `
        <li class="todo-item">
            <span class="task-text">${taskText}</span>
            <button class="btn btn-delete btn-danger">Xóa</button>
        </li>
    `;

    // 3. Sử dụng insertAdjacentHTML để chèn vào cuối danh sách (Slide 48)
    todoList.insertAdjacentHTML('afterbegin', taskHTML);

    // 4. Xóa nội dung trong ô input sau khi thêm thành công
    todoInput.value = "";

    // 5. Thêm logic Xử lý Xóa và Đánh dấu hoàn thành cho phần tử VỪA CHÈN
    const firstItem = todoList.firstElementChild;
    const lastItem = todoList.lastElementChild;

    // Click vào chữ để gạch ngang (Sử dụng classList.toggle - Slide 45)
    lastItem.querySelector('.task-text').onclick = function () {
        this.classList.toggle('task-done');
    };
    firstItem.querySelector('.task-text').onclick = function () {
        this.classList.toggle('task-done');
    };
    // Click vào nút Xóa để xóa phần tử (Sử dụng .remove())
    firstItem.querySelector('.btn-delete').onclick = function () {
        firstItem.remove();
    };
    lastItem.querySelector('.btn-delete').onclick = function () {
        lastItem.remove();
    };
});
// --- BÀI 10: COUNTDOWN ---
let time = 30;
const timerEl = document.querySelector('#timer-10');
const countInt = setInterval(() => {
    let m = Math.floor(time / 60), s = time % 60;
    timerEl.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
    if (time-- <= 0) { clearInterval(countInt); timerEl.innerText = "HẾT HẠN"; document.querySelector('#btn-10-buy').disabled = true; }
}, 1000);