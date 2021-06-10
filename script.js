// TODO: add code here

window.addEventListener("load", function(){
    // TODO: fetch planets JSON
 
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            console.log(json);

            const container = document.getElementById("container");
           // alert("Json length is " + json.length);
            function sortByProperty(property){  
                return function(a,b){  
                   if(a[property] < b[property])  
                      return 1;  
                   else if(a[property] > b[property])  
                      return -1;  
               
                   return 0;  
                }  
             }

            json.sort(sortByProperty("hoursInSpace"));

            container.innerHTML += `<h3> Number of Astronauts : ${json.length}</h3>`
             for(let i=0; i < json.length;i++)
             {
               let status =json[i].active;

               
              
                if (status === true)
                {
                 
                 //   alert(status);
                container.innerHTML += `
                 <div class="astronaut">
                 
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                  
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                            
                        <li> <span style="color:green">Active: ${json[i].active} </span></li>
                        
                        <li>Skills: ${json[i].skills}</li>
                </ul>
                    </div>
                    <img class="avatar" src= ${json[i].picture}> 
                 
                 </div>
                `;
                }
                else{

                    container.innerHTML += `
                 <div class="astronaut">
                 
                 
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                                            
                        <li> Active: ${json[i].active} </li>
                        
                        <li>Skills: ${json[i].skills}</li>
                </ul>
                    </div>
                    <img class="avatar" src= ${json[i].picture}> 
                 
                 </div>
                `;
                }
            
             }
        });
    });
});