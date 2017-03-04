let superHeroData = [
  {name: "Batman", phone: "982-932-3784", affiliation: "dc" , image_url: "http://www.drodd.com/images13/batman28.jpg" },
  {name: "Superman", phone: "459-696-3874", affiliation: "dc", image_url: "https://s-media-cache-ak0.pinimg.com/originals/ed/8a/b8/ed8ab88ff47f855d5593f3f7f19b9972.jpg"},
  {name: "Spiderman", phone: "783-545-6983", affiliation: "marvel", image_url: "http://static2.comicvine.com/uploads/scale_small/8/83882/2026841-spidey_by_mike_d.jpg"},
  {name: "Wonder Woman", phone: "097-856-4039", affiliation: "dc", image_url: "https://s-media-cache-ak0.pinimg.com/736x/23/41/4c/23414c0eb5af6d11deb705d25726e2c7.jpg"},
  {name: "Juggernaut", phone: "982-625-3872", affiliation: "marvel", image_url: "http://vignette2.wikia.nocookie.net/marveldatabase/images/a/a4/Cain_Marko_(Earth-20051)_Marvel_Adventures_The_Avengers_Vol_1_7.jpg/revision/latest?cb=20140102041100"},
  {name: "Shocker", phone: "087-423-2529", affiliation: "marvel", image_url: "https://s-media-cache-ak0.pinimg.com/originals/4c/27/89/4c27891b5681cc79f00e53dda648e8ca.jpg"},
  {name: "Captain 'Murica", phone: "923-874-7672", affiliation: "marvel", image_url: "http://static5.comicvine.com/uploads/original/0/40/79617-148996-captain-america.jpg"},
]

angular
  .module("superHeroPhoneBook", [])
  .controller("heroesCtrl", [ phoneBookController ])

  function phoneBookController() {
    this.heroes = superHeroData;
    this.addHero = function() {
      let hero = {name: this.newHeroName, phone: this.newHeroPhone, affiliation: this.newHeroAfil, image_url: this.newHeroPic};
      this.heroes.push(hero);
    }
  }
