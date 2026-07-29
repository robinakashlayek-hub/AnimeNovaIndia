const animeList = [

{
name:"Solo Leveling",
rating:"9.8",
genre:"Action",
image: "images/IMG_20220402_093151.jpg"
},

{
name:"Naruto",
rating:"9.6",
genre:"Adventure",
image:"https://picsum.photos/300/420?102"
},

{
name:"One Piece",
rating:"9.9",
genre:"Adventure",
image:"https://picsum.photos/300/420?103"
},

{
name:"Demon Slayer",
rating:"9.7",
genre:"Action",
image:"https://picsum.photos/300/420?104"
},

{
name:"Attack on Titan",
rating:"9.9",
genre:"Action",
image:"https://picsum.photos/300/420?105"
},

{
name:"Jujutsu Kaisen",
rating:"9.5",
genre:"Action",
image:"https://picsum.photos/300/420?106"
}

];

const animeContainer=document.getElementById("animeList");

function loadAnime(list){

if(!animeContainer) return;

animeContainer.innerHTML="";

list.forEach(anime=>{

animeContainer.innerHTML+=`

<div class="anime-card">

<img src="${anime.image}">

<div class="anime-info">

<h3>${anime.name}</h3>

<p>⭐ ${anime.rating} • ${anime.genre}</p>

<a href="watch.html?anime=${encodeURIComponent(anime.name)}">

<button>▶ Watch</button>

</a>

</div>

</div>

`;

});

}

loadAnime(animeList);
// Search

const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("input",function(){

const value=this.value.toLowerCase();

const filtered=animeList.filter(anime=>

anime.name.toLowerCase().includes(value)

);

loadAnime(filtered);

});

}

// Banner Slider

const banners=[

{
title:"Solo Leveling",
image:"images/IMG_20220402_093151.jpg"
},

{
title:"Naruto",
image:"https://picsum.photos/1200/600?202"
},

{
title:"One Piece",
image:"https://picsum.photos/1200/600?203"
},

{
title:"Demon Slayer",
image:"https://picsum.photos/1200/600?204"
}

];

let currentBanner=0;

function changeBanner(){

const bannerImage=document.getElementById("bannerImage");

const bannerTitle=document.getElementById("bannerTitle");

if(!bannerImage || !bannerTitle) return;

bannerImage.src=banners[currentBanner].image;

bannerTitle.innerText=banners[currentBanner].title;

currentBanner++;

if(currentBanner>=banners.length){

currentBanner=0;

}

}

changeBanner();

setInterval(changeBanner,4000);
// Category Filter

function filterCategory(category){

if(category==="All"){

loadAnime(animeList);

return;

}

const filtered=animeList.filter(anime=>anime.genre===category);

loadAnime(filtered);

}

// Favorite Button

document.addEventListener("click",function(e){

if(e.target.classList.contains("fav")){

if(e.target.innerText==="🤍"){

e.target.innerText="❤️";

}else{

e.target.innerText="🤍";

}

}

});

// Category Buttons

const categoryButtons=document.querySelectorAll(".categories button");

categoryButtons.forEach(button=>{

button.addEventListener("click",function(){

const category=this.innerText;

filterCategory(category);

});

});
