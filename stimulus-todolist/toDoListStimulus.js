import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
        window.Stimulus = Application.start()    
        Stimulus.register("toDoList", class extends Controller {
          static targets = ["jobs", "allTasksDiv"]    
          addJob(){
            var classthis = this;
            let individualJobDiv = document.createElement("div");
            individualJobDiv.className = "task-div";                
            let btnDelete = this.createrButton("button", "submit", "Delete", "delete-btn"); 
            let btnEdit = this.createrButton("button", "submit", "Edit", "edit-btn");
            btnDelete.addEventListener("click", function(){
              this.parentNode.remove();
            });              
            btnEdit.addEventListener("click",function(){
              this.style.display = "none";              
              let editField = document.createElement("input");
              editField.type = "text";
              editField.value = this.parentNode.firstChild.nextSibling.innerHTML;
              this.parentNode.firstChild.nextSibling.innerHTML = "";
              this.parentNode.firstChild.nextSibling.appendChild(editField);              
              var btnEditThis = this; 
              let btnSave = classthis.createrButton("button", "submit", "Save", "save-btn");
              btnSave.addEventListener("click", function(){    
                let value1 = this.parentElement.firstChild.nextElementSibling.firstChild.value ;
                this.parentElement.firstChild.nextElementSibling.innerHTML = "";
                this.parentElement.firstChild.nextElementSibling.innerHTML = value1;
                this.remove();
                btnEditThis.style.display = "block";                
              });
              individualJobDiv.appendChild(btnSave);
            })            
            let eachJobCheckBox = this.checkBox()            
            eachJobCheckBox.addEventListener("click", function(){
              if (this.checked == true){
                  this.nextSibling.style.textDecoration = "line-through";                
              }else{
                  this.nextSibling.style.textDecoration = "none";
              }
            });    
            if(event.keyCode == 13 && this.jobsTarget.value !=""){
              individualJobDiv.appendChild(eachJobCheckBox);
              individualJobDiv.appendChild(this.spanElement(this.jobsTarget.value ));
              individualJobDiv.appendChild(btnDelete);
              individualJobDiv.appendChild(btnEdit); 
              this.allTasksDivTarget.appendChild(individualJobDiv); 
              this.jobsTarget.value = "";
            }       
          }
          // FUNCATIONS
          createrButton(elementName, elementType, innerText, buttonClassName){
            var button = document.createElement(elementName);
            button.innerHTML = innerText;
            button.value = innerText;
            button.type = elementType;
            button.className = buttonClassName;
            return button;    
        }
        spanElement(innerHTMLValue){
            let spanElement = document.createElement("span");
            spanElement.id = "lable";
            spanElement.innerHTML = innerHTMLValue;
            return spanElement;
        }
        checkBox(){
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.className = "check-box";
            return checkBox;
        }          
      });


