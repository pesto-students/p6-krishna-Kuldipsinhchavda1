function createStack() {

    var Items = [];
    return {
        push(item) {
            return Items.push(item);
        },
        pop() {
            return Items.pop();
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
console.log(stack.Items)