function TaskList(){
    this.arr = [];
    
    this.addTask = function(task){
        return this.arr.push(task);
    };

    this.findIndex = function(input){
        // var vitri = -1;;
        // this.arr.forEach(function( items, index) {
        //    if( items.id === input){
        //     vitri = index;
        //    };
        // });                 
        // return vitri;   
        
        return this.arr.findIndex(function(items){
            return items.id === input;
        });
    };
    
    this.deleteTask = function(task){
        var index = this.findIndex(task.id);
        if(index !== -1){
            this.arr.splice(index,1);
        };  
    };
    this.getTaskById = function(id){
       return this.arr[ this.findIndex(id)];
    };
    
};
TaskList.prototype.updateTask = function(task){
    var index = this.findIndex(task.id);
    this.arr[index] = task;
};