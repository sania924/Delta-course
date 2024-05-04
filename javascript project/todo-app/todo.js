let todo=[];
let req=prompt("enter your request"); //get user request for to add list ,delete,quit

while(true){    // lopp infinite run until user enter quit
    if(req=="quit"){
        console.log("quit app");
        break;
    }
    else if(req=="list"){
        console.log("here is your list");
for(let i=0; i<todo.length;i++){
    console.log(i,todo[i]);
}
console.log("end list");
    }
   else if(req=="add"){
        let task=prompt("enter the task you want");{
            todo.push(task);
            console.log("task added")
        }
    }
    else if(req=="delete"){
        let idx=prompt("enter the task you want to delete");{
            todo.splice(idx,1);
            console.log("task deleted")
        }
    }
    else{
        console.log("wrong request");
    }
     req=prompt("enter your request"); //get user request for to add list ,delete,quit

}