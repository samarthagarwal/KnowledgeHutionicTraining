import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  superheroes: any[] = [
    {
      name: "Batman",
      strength: 45,
      id: 12,
    },
    {
      name: "Superman",
      strength: 95,
      id: 13,
    },
    {
      name: "Flash",
      strength: 55,
      id: 14,
    },
    {
      name: "Spiderman",
      strength: 65,
      id: 15,
    },
    {
      name: "Phantom",
      strength: 85,
      id: 16,
    },
    {
      name: "Tarzan",
      strength: 95,
      id: 17,
    },
  ];

  constructor() {}

  getColor(strength: number) {
    if (strength < 25) {
      return "primary";
    } else if (strength < 50) {
      return "secondary";
    } else if (strength < 75) {
      return "success";
    } else {
      return "danger";
    }
  }

  addSuperhero(terms, id, name, strength) {
    if (terms == null || terms == false) {
      return;
    }

    this.superheroes.push({
      name: name,
      id: id,
      strength: strength,
    });
  }
}
