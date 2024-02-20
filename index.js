const addBtn = document.querySelector('.addBtn');
const todoList = [{
      name: 'make dinner',
      dueDate: '2022-12-22'
},{
      name: 'wasajhdaj',
      dueDate: '2012-12-12'
}];

addBtn.addEventListener('click', addFunc);
renderTodoList() 

function renderTodoList(){
      let total = '';
     todoList.forEach((todoObject,index) => {
      const {name, dueDate} = todoObject
      const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class = "deleteBtn oto-deleteBtn">Delete</button>        
            `;
            total += html;
      });
      /*for (let i = 0; i < todoList.length; i++){
            const todoObject = todoList[i];
            //const name = todoObject.name;
            //const dueDate = todoObject.dueDate;
            const {name, dueDate} = todoObject
            const html = `
                  <div>${name}</div>
                  <div>${dueDate}</div>
                   <button onclick="
                        todoList.splice(${index}, 1);
                        renderTodoList();
            " class ="deleteBtn oto-deleteBtn">Delete</button>    
             `;
             total += html;
       }*/
        document.querySelector('.todoListDiv').innerHTML = total;

        document.querySelectorAll('.oto-deleteBtn').forEach((deleteBtn1, index)=>{
            deleteBtn1.addEventListener('click',()=>{
                  todoList.splice(index, 1);
                        renderTodoList();
            });

        });  
}

 function addFunc(){
  const inputElement = document.querySelector('.js-input');
  const inputElementDate = document.querySelector('.js-input-date');
  const dueDate = inputElementDate.value;
  const name = inputElement.value;

  todoList.push({
      //name: name,
      //dueDate: dueDate
      name,
      dueDate
  });
  inputElement.value = '';
  renderTodoList();
 }
