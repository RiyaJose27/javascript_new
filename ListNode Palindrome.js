isPalindrome() {
    if(this.head.value != this.tail.value) {
        return false;
    }

    let new_Stack = new SLLStack();

    var runner = this.head;
    while(runner != null){
        new_Stack.push(runner.value);
        runner = runner.next;
    }
    runner = this.head;
    while(runner != null){
        if (runner.value != new_Stack.pop()){
            return false;
        }
        runner = runner.next;
    }
    
    return true;
}
}
