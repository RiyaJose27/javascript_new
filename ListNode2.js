// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}

// var x = new ListNode(7);

// var y = new ListNode(17);
// x.next = y;

// var z = new ListNode(3);
// y.next = z;

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
        
        var newNode = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            newNode.next = this.head;
            this.head = newNode;
        }

    }
    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {
        
        var newNode = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    // contains - returns true if target is in the linked list (as a node value),
    // false otherwise
    contains(target) {
        var runner = this.head;

        while (runner != null) {

            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }
    
    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 8"
    display() {
        if (this.head == null && this.tail == null) {
            return 'empty!'
        }
        var runner = this.head;
        var output = '';

        while (runner != null) {
            if (runner == this.tail) {
                output += runner.value;
            }
            else {
                output += runner.value + ' - ';
            }
            runner = runner.next;
        }

        return output;
    }

    // removeFront() - remove the head of the linked list and
    // return that node's value - not the node itself
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????

    removeFront() {

        if (this.head == null && this.tail == null) {
            return undefined;
        }

        if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;

    }

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?

    removeBack() {

        if (this.head == null && this.tail == null) {
            return undefined;
        }

        if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var runner = this.head;

        while (runner != null) {
            if (runner.next == this.tail) {
                var temp = this.tail;
                this.tail = runner;
                this.tail.next = null;
                return temp.value;
            }
            runner = runner.next;
        }
    }

}

// bonus: making these linked lists to test is kind of tedious. what if...
// what if... we had a function (not a method of the SLL class) to make them
// for us?
// generateNewList(length, min_value, max_value) -> creates a new SLL of the
// given length, with nodes containing values from min_value up to max_value
// some random integers may be helpful here

function generateNewList(length, min_value, max_value) {
    var newSLL = new SinglyLinkedList();
    // magic???
    return newSLL;
}

var newSLL = new SinglyLinkedList();

newSLL.addToBack(5);
newSLL.addToBack(4);
newSLL.addToBack(3);
newSLL.addToBack(2);
newSLL.addToBack(1);

console.log(newSLL.display());

// console.log(newSLL.removeFront()); // should return 5
// console.log(newSLL.display()); // should return 4 - 3 - 2 - 1

// console.log(newSLL.removeFront());
// console.log(newSLL.display());

// console.log(newSLL.removeFront());
// console.log(newSLL.display());

// console.log(newSLL.removeFront());
// console.log(newSLL.display());

// console.log(newSLL.removeFront());
// console.log(newSLL.display());

// console.log(newSLL.removeFront());
// console.log(newSLL.display());

console.log(newSLL.removeBack()); // should return 1
console.log(newSLL.display()); // should return 5 - 4 - 3 - 2

console.log(newSLL.removeBack()); 
console.log(newSLL.display());

console.log(newSLL.removeBack()); 
console.log(newSLL.display());

console.log(newSLL.removeBack()); 
console.log(newSLL.display());

console.log(newSLL.removeBack()); 
console.log(newSLL.display());

// console.log(newSLL.head);
// console.log(newSLL.tail);
console.log(newSLL.removeBack()); 
console.log(newSLL.display());