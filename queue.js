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

    function dequeue(){
        if(count != beg){
            const entry = data[beg];
            delete data[beg];
            beg++;
            return entry;
        }
        else{
            return "Queue is empty";
        }


    }
    return {enqueue, peek, dequeue, data};
}

const queue = queueFunction();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

console.log(queue.peek());
