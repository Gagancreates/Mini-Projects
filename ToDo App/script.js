const task=document.getElementById("task");

document.getElementById("btn").addEventListener("click", function(){
    const input=document.getElementById("texton").value;
    const newElement=document.createElement("div");
    const deletebtn=document.createElement("Button");
    const complete1=document.createElement("Button");
    complete1.textContent="Done";
    deletebtn.textContent="Delete";
    deletebtn.addEventListener("click", function(){
        this.parentElement.remove();
    });
    complete1.addEventListener("click", function(){
            newElement.style.textDecoration="line-through";
    });
    
    
    newElement.textContent=input;
    newElement.appendChild(complete1);
    newElement.appendChild(deletebtn);
    task.appendChild(newElement);
   
});