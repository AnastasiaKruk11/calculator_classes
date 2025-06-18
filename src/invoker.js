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
        const command = this.history.pop();

        if(command && this.history.length > 0) {
            return this.history[this.history.length - 1];
        } else {
            return 'no results';
        }
    }
}