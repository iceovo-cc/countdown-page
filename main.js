const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

// 添加待办
addBtn.onclick = addTodo;
input.addEventListener('keydown',e=>e.key==='Enter'&&addTodo());

function addTodo(){
    const text = input.value.trim();
    if(!text) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <span class="del">删除</span>
    `;
    // 点击完成划线
    li.querySelector('span').onclick = ()=>li.classList.toggle('done');
    // 删除
    li.querySelector('.del').onclick = ()=>li.remove();

    list.appendChild(li);
    input.value = '';
}
