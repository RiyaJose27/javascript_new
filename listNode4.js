moveMaxToBack(){
    if(this.head == null && this.tail == null){
        return undefined;
    }
    var temp = this.findMaxNode();
    if(temp != this.tail){
        if(temp != this.head){
            var runner = this.head;
            while(runner.next != temp){
                runner = runner.next;
            }
            runner.next = temp.next;
        }else{
            this.head = this.head.next;
        }
        this.tail.next = temp;
        this.tail = temp;
        this.tail.next = null;
    }
    console.log(this.display())
}   

moveMinToFront(){
    if(this.head == null && this.tail == null){
        return undefined;
    }
    var temp = this.findMinNode();
    if(temp != this.head){
        var runner = this.head;
        while(runner.next != temp){
            runner = runner.next;
        }
        if(temp == this.tail){
            this.tail = runner;
        }else{
            runner.next = temp.next;
        }
        temp.next = this.head;
        this.head = temp;
    }
    console.log(this.display())
}