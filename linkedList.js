class ListNode {

    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor(head){
        this.head = head;
        this.next = null;
    }

    getCount(){
        let count = 1;
        let currentNode = this.head;

        while(currentNode.next){
            currentNode = currentNode.next;
            count++;
        }

        return count;
    }

    getLast(){
        let currentNode = this.head;
        let nextNode = currentNode.next;
        while(currentNode.next){
            currentNode = nextNode;
        }

        return currentNode.data;
    }

    addNode(node) {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = node;
      }

}

let node1 = new ListNode(1);
let node2 = new ListNode(2);

node1.next = node2;
let list = new LinkedList(node1);
let node3 = new ListNode(3);

list.addNode(node3);


console.log(list.getLast());