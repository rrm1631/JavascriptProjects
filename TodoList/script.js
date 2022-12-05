const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addTodos = (todo) => {
    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center text-light"> 
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;
};

//Add Todos
addForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const todo = addForm.add.value.trim();
    // console.log(todo);

    if(todo.length){ 
        addTodos(todo);
        addForm.reset();
        //addForm.add.value = "";
    }
});

 //Delete Todos
list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


//Filter Todos
const filterTodos = (term) =>{
    const li = Array.from(list.children);
    
    // const filtered = li.filter((todo)=>{
    //     return !todo.textContent.includes(term); //return all items that doesn't match the term
    // });

    // filtered.forEach((todo)=>{
    //     todo.classList.add('filtered'); //add filtered class to each item
    // });

    li.filter((todo)=> !todo.textContent.toLowerCase().includes(term)) //return all items that doesn't match the term
    .forEach((todo)=>todo.classList.add('filtered')); //add filtered class to each item

    li.filter((todo)=> todo.textContent.toLowerCase().includes(term)) //return all items that matches the term
    .forEach((todo)=>todo.classList.remove('filtered')); //remove filtered class to each item
}

//Search Todos
search.addEventListener('keyup',  ()=>{
    const term = search.value.trim().toLowerCase();

    filterTodos(term);
});