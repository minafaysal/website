
const url = "http://jsonplaceholder.typicode.com/users"

function getData() {

    fetch(url) .then((response) => { return response.json(); }).then((data) => {
            showCards(data);
        })
}

function filter(val) {
    clearcontent();
    addNewData();
    fetch(url).then((response) => {return response.json();}).then((data) => {
            var searchBar = document.getElementById("query").value        
          
            if (searchBar.length !== 0) {
                var newData = data.filter(item => item.name.includes(searchBar))  
                console.log(newData)
                if (newData.length !== 0) {
                     
                    showCards(newData);
                } else  {
                    
                    alert("no customer(s) found with the search criteria");
                    showCards(newData);
                }               
            }
            else if (searchBar === '') {
                console.log(" searchBar is empty")
                showCards(data)
                return;
            }
        })
};


function showCards(data) {
 

    const container = document.getElementById('accordion');

    data.forEach((data, idx) => {
        // Create card element
        const card = document.createElement('cardDiv');
        card.classList = 'card-body';

        // Construct card content
        const content = `
         <div class="card " id="card">       
         <img class="card-img-top"
         src="https://st2.depositphotos.com/1032921/5237/v/450/depositphotos_52374307-stock-illustration-blue-profile-icon.jpg"
         alt="Card image cap">
       
    
         <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
           <div class="card-body">
            <img class="card-img-top2 "
             src="https://st2.depositphotos.com/1032921/5237/v/450/depositphotos_52374307-stock-illustration-blue-profile-icon.jpg"
             alt="Card image cap">
           <h6 class="  fw-bolder " >   ${data.name}</h6>
           
             <h6 class="cardText text-muted " > @${data.username}</h6>
             
             <h6 class=" cardText companyPharse ">  "${data.company.catchPhrase}" </h6>
            <h6 class="divider" style= "border-bottom: 1px solid #E8E8E8;" ></h6>
            <h6 class="spacer" style="height=10px ;padding-bottom:0.5px" ></h6>
             <h6 class=" cardText"><img src = "envelope.png" alt="icone" class='icone' />&nbsp; ${data.email}</h6>
                   <h6 class=" cardText grid-container">
                   <div class="item4"><img src = "location.png" alt="icone" class='icone item1'/> </div>
                   <div class="item5 item2" style="width:309px ">
             ${data.address.street},
             ${data.address.suite},${data.address.city},${data.address.zipcode},${data.address.geo.lat} ,${data.address.geo.lng} 
                   </div>
                  </h6>
             <h6 class="cardText"><img src = "telephone.png" alt="icone" class='icone' />&nbsp; ${data.phone}</h6>
             <h6 class="cardText"><img src = "internet.png" alt="icone" class='icone' />&nbsp; ${data.website} </h6>
             <h6 class="cardText"><img src = "briefcase.png" alt="icone" class='icone'/>&nbsp; ${data.company.name} </h6>
             <h6 class="cardText"><img src = "power-plant.png" alt="icone" class='icone'/>&nbsp;   ${data.company.bs} </h6>
   
             
           </div>
         </div>
       </div>
       `;

        // Append newyly created card element to the container
        container.innerHTML += content; 
    })
}
function clearcontent() {
    const element = document.getElementById("accordion");

    element.remove();
    // console.log(element)
   
}

function addNewData(){
    const parent = document.getElementById("container2");
     var newChild = ' <div id="accordion"></div>';
    parent.insertAdjacentHTML('beforeend', newChild);
}



function sortDataAZ(){
    clearcontent();
    addNewData();

    fetch(url).then((response) => {return response.json();}).then((data) => {
    data.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      showCards(data);
    })
}
function sortDataZA(){
    clearcontent();
    addNewData();

    fetch(url).then((response) => {return response.json();}).then((data) => {
   data.sort(function (a, b) {
        if (b.name<a.name  ) {
          return -1;
        }
        if (b.name>a.name )  {
          return 1;
        }
        return 0;
      });
      showCards(data);
    })
}







