import TodoModel from '../models/todoModel';

class Todos {
    constructor(todoList) {
        this.todoList = todoList;
    }
    
    add(title, done) {
        let model = new TodoModel(title);
        if (done === true) {
            model.done = true;
        }
        this.todoList.push(model);
        
        document.dispatchEvent(new Event('TODOLIST:MODIFIED'));
    }

    delete(index) {
        this.todoList.splice(index, 1);

        document.dispatchEvent(new Event('TODOLIST:MODIFIED'));
    }

    toggleDone(index) {
        this.todoList[index].done = !this.todoList[index].done;

        document.dispatchEvent(new Event('TODOLIST:MODIFIED'));
    }
}

export default Todos;