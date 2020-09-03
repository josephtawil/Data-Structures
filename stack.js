function stackFunction(){
    //count is the pointer
    let count = 0;
    let data = [];

    function push(item){
        data[count] = item;
        count++;
    }

    function peek(){
        return data[count - 1];
    }

    function pop(){
        if(count != 0)
        {
            const entry = data[count - 1];
            delete data[count - 1];
            count --;
            return entry;
        }
        else{
            return "Stack is empty";
        }
    }
    return {push, peek, pop, data};
}

const stack = stackFunction();

stack.push(1);
stack.push(2);
stack.pop();
console.log(stack);
console.log(stack.peek());
