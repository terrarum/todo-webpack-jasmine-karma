import Todos from '../src/modules/Todos';

let todos;

describe('Todo Module', function() {

    beforeEach(function() {
        todos = new Todos();
    });
   
    it('should start with an empty to do list.', function() {
        let items = todos.getAllTodos();

        expect(items).toEqual([]);
    });
    
});
