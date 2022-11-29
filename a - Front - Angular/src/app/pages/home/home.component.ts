import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document: Document) { }

  ngOnInit(): void {
  }

 fechaActual(){
  var fecha = new Date();
  var dd = fecha.getDate();
  var mm = fecha.getMonth() + 1; //Enero es 0!
  var yyyy = fecha.getFullYear();
  
  if (dd < 10)! {
    dd : '0' + dd
  }
  
  if (mm < 10)! {
    mm : '0' + mm
  }
  
  fecha : mm + '/' + dd + '/' + yyyy;
  return fecha
  }

calculaEdad() {
  var nacimiento: any = document.getElementById("fechanacimiento")!;
  nacimiento = new Date(nacimiento.value);
  var actualidad = new Date(this.fechaActual());
  var edad = (actualidad.getFullYear() - nacimiento.getFullYear());

  if (actualidad.getMonth() < nacimiento.getMonth() || actualidad.getMonth() == nacimiento.getMonth() && actualidad.getDate() < nacimiento.getDate()) {
      edad--;
  }

  if (edad >= 16) {
      document.getElementById("aviso1")!.innerHTML = "Genial, tienes " + edad + " años, puedes participar en votaciones!"
      document.getElementById("aviso1")!.style.backgroundColor = "Green"
  }
  else {
      document.getElementById("aviso1")!.innerHTML = "Lo sentimos, debes ser mayor";
      document.getElementById("aviso1")!.style.backgroundColor = "Yellow"
  }
  return edad;
}
}


