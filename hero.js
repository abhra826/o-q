let params = new URLSearchParams(window.location.search)
let id=params.get('id');
let favList=[];
let hero;
 let combat,duration,intelligence,power,speed,strength;
 let aliases,alignment,alterEgos,firstAppearance,fullName,placeOfBirth,publisher;
 let groupAffiliation,relatives;
let container = document.querySelector(".container");
let btn=document.querySelector(".btn");



 async function fetchfunction(){
     const response=await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
     return await response.json();
    }
    (async()=>{
        hero= await fetchfunction();
        h1.innerHTML=hero.name;
        let image = hero.images.sm;
        ( {combat,durability,intelligence,power,speed,strength} =  hero.powerstats);
        ({aliases,alignment,alterEgos,firstAppearance,fullName,placeOfBirth,publisher}=hero.biography);
        ({groupAffiliation,relatives}=hero.connections);
       

        

        
        const htmlData = `
       
    <div class="hero_card">
     <div>
         <img src=${image}>
     </div>
     <span id="combat" class="powerstate">
         combate:${combat}
     </span>
     <span id="durability" class="powerstate">
         durability:${durability}
     </span>
     <span id="intelligence" class="powerstate">
         intelligence:${intelligence}
     </span>
     <span id="power" class="powerstate">
         power:${power}
     </span>
     <span id="speed" class="powerstate">
         speed:${speed}
     </span>
     <span id="strength" class="powerstate">
         strength:${strength}
     </span>
     <button class="btn"  type="submit"><i class="fas fa-heart"></i>Add to Favourites</button>

 </div>
 <div class="hero_info">

      <h1>
      ${fullName}
     </h1>
     <hr>
     <span class="biography">fullName: ${fullName}</span>
     <span class="biography"> aliases:${aliases} </span>
     <span class="biography">alignment: ${alignment}</span>
     <span class="biography">alterEgos: ${alterEgos}</span>
     <span class="biography">firstAppearance: ${firstAppearance}</span>
     <span class="biography">placeOfBirth: ${placeOfBirth}</span>
     <span class="biography">publisher: ${publisher}</span>
     <hr>

     <span class="connections">connections:
     <br>
        groupAffiliation: ${ groupAffiliation}
        relatives:${relatives} </span>


 </div>
 

`;
container.insertAdjacentHTML('afterbegin',htmlData);
const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));;
    if(existingEntries == null) existingEntries = [];
       let entry={
           "id":id,
        "image":hero.images.sm,
        "name":fullName
    }
    var found=existingEntries.findIndex((element)=>{
        if(element.id==id){
            return true;
        }
    })
    if(found==-1){
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    window.open("favList.html","_blank")
}
    else{
        alert("alredy exist");
        console.log("already exist");
    }
      
})


     })();
     
     let h1=document.getElementById('name');

     
    


