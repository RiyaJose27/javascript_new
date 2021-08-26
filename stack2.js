class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLLStack {
    constructor() {
        this.head = null
        this.tail = null
    }

    // push a value to the head of the SLL
    push(value) {
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

    pop() {
        if (this.head == null && this.tail == null) {
            return 'empty';
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

    top() {
        if (this.head == null && this.tail == null) {
            return "empty"
        } else {
            return this.head
        }
    }

    contains(target) {
        var runner = this.head
        while (runner != null) {
            if (runner.value == target) {
                return true
            } else {
                return false
            }
            runner = runner.next
        }
    }

    isEmpty() {
        if (this.head == null && this.tail == null) {
            return true
        } else {
            return false
        }
    }

    size() {
        var runner = this.head
        var counter = 0

        while (runner != null) {
            counter += 1
            runner = runner.next
        }
        return counter
    }
}

// make sure you test all six methods!
// make sure that you test any edge cases you find

var x = new SLLStack();
x.push(1)
x.push(2)
x.push(3)
x.push(2)
x.push(1)
console.log(x.display())
console.log(x.pop())
console.log(x.display())
console.log(x.top())
console.log(x.contains(3))
console.log(x.contains(19))
console.log(x.isEmpty())