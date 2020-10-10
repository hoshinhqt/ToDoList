var taskList = new TaskList();
var validated  = new Validation();
var tasks ;


getElement("addItem").addEventListener("click", function(){

    var noticeMess = getElement("newTask").value;
    var _id = Math.random();
    var statusTask = "todo";
    console.log(_id,noticeMess, statusTask);
    var isValid = true;
    isValid &= validated.kiemTraTrungTen(noticeMess, taskList.arr, "tbAddItem", "Task da ton tai")&&
                validated.kiemTraRong(noticeMess, "tbAddItem");
   
    if(!isValid) return;

    tasks = new Task(_id,noticeMess, statusTask);
    taskList.addTask(tasks);
    console.log(taskList.arr);
    createContent(taskList.arr);
    getElement("newTask").value = "";
    setLocalStorage();
});
    
getLocalStorage();

function createContent(arr){
    
    var content = "";
    arr.forEach(function(item) {
        if(item.status == "todo"){
            content += `
        
        <li>
            <span>${item.contentTask}</span>   
            <div class="buttons">
                <button class="remove" onclick= "moveTrash(${item.id})"><i class="fa fa-trash-alt "></i></button>
                <button class="complete" onclick = "checkComplete(${item.id})"><i class="fa fa-check-circle complete"></i></button>
            </div>     
        </li>   
       
        `;
        }
        
    });
    getElement("todo").innerHTML = content;
};
function changeContentText(arr){
    var content = "";
    arr.forEach(function(item) {
        if(item.status == "completed"){
            content += `

        
        <li >
        <span>${item.contentTask}</span>
        <div class="buttons">
            <button class="remove" onclick= "moveTrash(${item.id})"><i class="fa fa-trash-alt "></i></button>
            <button class="complete" onclick = "checkBack(${item.id})"><i class="fa fa-check-circle "></i></button>
        </div>
       
        </li>   
       
        `;
        };
        
    });
    // content += `

    //     <li >${arr.contentTask}
    //     <button class="buttons" onclick= "moveTrash(${arr.id})"><i class="fa fa-trash-alt remove"></i></button>
    //     <button class="buttons" onclick = "checkBack(${arr.id})"><i class="fa fa-check-circle complete"></i></button>
    //     </li>   
       
    //     `;
    getElement("completed").innerHTML = content;
   
}

function checkComplete(id){
    alert("Ban muon chuyen status");
    madeChangeStatus(id,"completed"); 
    setLocalStorage();
}
function checkBack(id){
    alert("Ban muon chuyen status");
    madeChangeStatus(id,"todo");
    setLocalStorage();
}
function moveTrash(id){
    alert("Ban muon xoa nhiem vu");
    var taskChangeStaus = taskList.getTaskById(id);
    taskList.deleteTask(taskChangeStaus);

    // createContent(taskList.arr);
    // changeContentText(taskList.arr);
    setLocalStorage();
}

function madeChangeStatus(id, status){

    var taskChangeStaus = taskList.getTaskById(id);
    taskChangeStaus.status = status;
    taskList.updateTask(taskChangeStaus);
   
    createContent(taskList.arr);
    changeContentText(taskList.arr);
}

function getElement(id){
    return document.getElementById(id);
};

function getLocalStorage(){
    if(localStorage.getItem("TASKLIST")){
        taskList.arr = JSON.parse(localStorage.getItem("TASKLIST"));
        createContent(taskList.arr);
        changeContentText(taskList.arr);
    };
};
function setLocalStorage(){
    localStorage.setItem("TASKLIST", JSON.stringify(taskList.arr));
};