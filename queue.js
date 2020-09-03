function queueFunction(){
    let count = 0;
    let beg = 0;
    let data = [];
    
    function enqueue(item){
        data[count] = item;
        count++;
    }

    function peek(){
        return data[count-1];
    }

    return {enqueue, peek};
}

const queue = queueFunction();

queue.enqueue(1);
queue.enqueue(2);


