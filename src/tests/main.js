import Todos from '../modules/Todos';

let todos;

describe('Todo Module', function() {

    beforeEach(function() {
        todos = new Todos();
    });
   
    it('should start with an empty to do list.', function() {
        let items = todos.getAllTodos();

        expect(items).toEqual([]);
    });

    it('should only add one task at a time.', function() {
        todos.add('Read a book');
        let items = todos.getAllTodos();
        expect(items.length).toEqual(1);

        todos.add('Find a heron');
        items = todos.getAllTodos();
        expect(items.length).toEqual(2);
    });

    it('should only delete one task at a time.', function() {
        todos.add('Hinder the Dutch.');
        todos.add('Invade Canada.');

        let items = todos.getAllTodos();
        expect(items.length).toEqual(2);

        todos.delete(1);
        items = todos.getAllTodos();
        expect(items.length).toEqual(1);
    });

    it('should mark items as done.', function() {
        todos.add('Free Hat');
        todos.toggleDone(0);

        let items = todos.getAllTodos();
        expect(items[0].done).toEqual(true);
    });
});
