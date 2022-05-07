const accord = document.getElementsByClassName("accordion");

// geht durch das Html und nimmt sich alle klassen mit accordion raus und fügt je nach click eine active Klasse hinzu, dadurch wird das jeweilige CSS aktiviert
for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

