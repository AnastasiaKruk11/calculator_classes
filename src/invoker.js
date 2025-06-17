export default class Invoker {
    constructor() {
        this.history = [];
    }

    execute(command) {
        return command.execute();
    }

    useStorage(command) {
        return this.history.push(command);
    }

    undo() {
        const undoneValue = this.history.pop();

        if(undoneValue) {
            return this.history[this.history.length - 1];
        } else {
            return 'Nothing to undo';
        }
    }
}