let todo=[];
let req=prompt("enter yur request"); //get user request for to add list ,delete,quit

while(true){    // lopp infinite run until user enter quit
    if(req=="quit"){
        console.log("quit app");
        break;
    }
    if(req=="list"){
        console.log(" -----------------------");
for(task of todo){
    console.log(task);
}
        console.log(" -----------------------");

    }
    if(req=="add"){
        let task=prompt("enter the task you want");{
            todo.push(task);
            console.log("task added")
        }
    }
     req=prompt("enter yur request"); //get user request for to add list ,delete,quit

}