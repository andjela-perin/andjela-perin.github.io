window.addEventListener("load", function(){

    let kartice = document.querySelectorAll(".ponuda-traka .hosting-kartice");
    console.log(kartice);
  
    for(let i=0; i<kartice.length; i++){
       kartice[i].addEventListener("mouseover", function(){
          this.classList.add('active');
       });
       kartice[i].addEventListener("mouseout", function(){
          this.classList.remove('active');
       });
    }


    document.getElementById("btn-proveri-domen").addEventListener("click", function(){

      domen = document.getElementById("domen").value;
      if(domen == "raf.rs"){
         //zauzeto sve
         document.getElementById("com").classList.add("nedostupno");
         document.getElementById("rs").classList.add("nedostupno");
         document.getElementById("net").classList.add("nedostupno");
         document.getElementById("info").classList.add("nedostupno");
         document.getElementById("cors").classList.add("nedostupno");
         document.getElementById("inrs").classList.add("nedostupno");
         document.getElementById("com").classList.remove("dostupno");
         document.getElementById("rs").classList.remove("dostupno");
         document.getElementById("net").classList.remove("dostupno");
         document.getElementById("info").classList.remove("dostupno");
         document.getElementById("cors").classList.remove("dostupno");
         document.getElementById("inrs").classList.remove("dostupno");
      } else if(domen == "pera.com"){
         //slobodno samo .com
         document.getElementById("com").classList.add("dostupno");
         document.getElementById("rs").classList.add("nedostupno");
         document.getElementById("net").classList.add("nedostupno");
         document.getElementById("info").classList.add("nedostupno");
         document.getElementById("cors").classList.add("nedostupno");
         document.getElementById("inrs").classList.add("nedostupno");
         document.getElementById("com").classList.remove("nedostupno");
         document.getElementById("rs").classList.remove("dostupno");
         document.getElementById("net").classList.remove("dostupno");
         document.getElementById("info").classList.remove("dostupno");
         document.getElementById("cors").classList.remove("dostupno");
         document.getElementById("inrs").classList.remove("dostupno");
      } else if(domen == "ana.info"){
         //slobodno samo .info
         document.getElementById("com").classList.add("nedostupno");
         document.getElementById("rs").classList.add("nedostupno");
         document.getElementById("net").classList.add("nedostupno");
         document.getElementById("info").classList.add("dostupno");
         document.getElementById("cors").classList.add("nedostupno");
         document.getElementById("inrs").classList.add("nedostupno");
         document.getElementById("com").classList.remove("dostupno");
         document.getElementById("rs").classList.remove("dostupno");
         document.getElementById("net").classList.remove("dostupno");
         document.getElementById("info").classList.remove("nedostupno");
         document.getElementById("cors").classList.remove("dostupno");
         document.getElementById("inrs").classList.remove("dostupno");
      } else if(domen == ""){
         document.getElementById("com").classList.remove("dostupno");
         document.getElementById("rs").classList.remove("dostupno");
         document.getElementById("net").classList.remove("dostupno");
         document.getElementById("info").classList.remove("dostupno");
         document.getElementById("cors").classList.remove("dostupno");
         document.getElementById("inrs").classList.remove("dostupno");
         document.getElementById("com").classList.remove("nedostupno");
         document.getElementById("rs").classList.remove("nedostupno");
         document.getElementById("net").classList.remove("nedostupno");
         document.getElementById("info").classList.remove("nedostupno");
         document.getElementById("cors").classList.remove("nedostupno");
         document.getElementById("inrs").classList.remove("nedostupno");
      } else{
         //slobodno sve
         document.getElementById("com").classList.add("dostupno");
         document.getElementById("rs").classList.add("dostupno");
         document.getElementById("net").classList.add("dostupno");
         document.getElementById("info").classList.add("dostupno");
         document.getElementById("cors").classList.add("dostupno");
         document.getElementById("inrs").classList.add("dostupno");
         document.getElementById("com").classList.remove("nedostupno");
         document.getElementById("rs").classList.remove("nedostupno");
         document.getElementById("net").classList.remove("nedostupno");
         document.getElementById("info").classList.remove("nedostupno");
         document.getElementById("cors").classList.remove("nedostupno");
         document.getElementById("inrs").classList.remove("nedostupno");
      }


    });
  
  });