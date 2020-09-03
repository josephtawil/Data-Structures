function queueFunction(){
    let count = 0;
    let beg = 0;
    let data = [];
    
    function enqueue(item){
        data[count] = item;
        count++;
    }

    function peek(){
        return data[beg];
    }

    return {enqueue, peek, data};
}

const queue = queueFunction();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());
