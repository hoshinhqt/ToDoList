function Validation(){
    this.kiemTraRong = function(input, idspan){
        if(input === ""){
            getElement(idspan).style.display = "block";
            alert("Vui long nhap Task");
            return false;
        };
            getElement(idspan).style.display = "none";
            getElement(idspan).innerHTML = "";
            alert("Them thanh cong");
            return true;
    };
    this.kiemTraTrungTen = function(input, arrTasks, idspan, mess){
        var setFlag = false;
        arrTasks.forEach(function(items){
            if(items.contentTask == input){
                setFlag = true;
                
            };
        });

        if(setFlag){
            getElement(idspan).style.display = "block";
            getElement(idspan).innerHTML = mess;
            return false;
        }
            getElement(idspan).style.display = "none";
            getElement(idspan).innerHTML = "";
            return true;
    };
}