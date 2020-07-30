import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: any[] = [
    {
      id: "5f215495a1bb51411c9f71e2",
      picture: "https://api.adorable.io/avatars/0",
      age: 29,
      name: "Francesca Beasley",
      gender: "female",
      company: "XUMONK",
      email: "francescabeasley@xumonk.com",
      phone: "+1 (825) 540-3880",
    },
    {
      id: "5f215495105116fa48d5090c",
      picture: "https://api.adorable.io/avatars/1",
      age: 38,
      name: "Melton Johns",
      gender: "male",
      company: "DATAGEN",
      email: "meltonjohns@datagen.com",
      phone: "+1 (989) 513-2709",
    },
    {
      id: "5f215495986184db4b39bf62",
      picture: "https://api.adorable.io/avatars/2",
      age: 39,
      name: "Manning Shelton",
      gender: "male",
      company: "QUILITY",
      email: "manningshelton@quility.com",
      phone: "+1 (847) 406-3936",
    },
    {
      id: "5f215495706619a5e999e23d",
      picture: "https://api.adorable.io/avatars/3",
      age: 39,
      name: "Daniels Swanson",
      gender: "male",
      company: "VINCH",
      email: "danielsswanson@vinch.com",
      phone: "+1 (938) 555-3791",
    },
    {
      id: "5f21549587c5cd2a3c583a2a",
      picture: "https://api.adorable.io/avatars/4",
      age: 29,
      name: "Walls Kelly",
      gender: "male",
      company: "HOTCAKES",
      email: "wallskelly@hotcakes.com",
      phone: "+1 (864) 507-2343",
    },
    {
      id: "5f215495c1fd5981c6462494",
      picture: "https://api.adorable.io/avatars/5",
      age: 20,
      name: "Willie Sampson",
      gender: "female",
      company: "AQUASURE",
      email: "williesampson@aquasure.com",
      phone: "+1 (938) 406-3945",
    },
    {
      id: "5f215495af09f021517af32a",
      picture: "https://api.adorable.io/avatars/6",
      age: 35,
      name: "Montgomery Downs",
      gender: "male",
      company: "FURNAFIX",
      email: "montgomerydowns@furnafix.com",
      phone: "+1 (973) 478-2266",
    },
    {
      id: "5f2154956d6d66decc0e868d",
      picture: "https://api.adorable.io/avatars/7",
      age: 38,
      name: "Olga Gates",
      gender: "female",
      company: "EMPIRICA",
      email: "olgagates@empirica.com",
      phone: "+1 (923) 427-2181",
    },
    {
      id: "5f215495e7eb9b7ad1db42fc",
      picture: "https://api.adorable.io/avatars/8",
      age: 20,
      name: "Maryellen Armstrong",
      gender: "female",
      company: "KROG",
      email: "maryellenarmstrong@krog.com",
      phone: "+1 (868) 543-2623",
    },
    {
      id: "5f2154958b7cc3aeda892050",
      picture: "https://api.adorable.io/avatars/9",
      age: 39,
      name: "Weeks House",
      gender: "male",
      company: "ADORNICA",
      email: "weekshouse@adornica.com",
      phone: "+1 (911) 520-2766",
    },
    {
      id: "5f2154951bae7e2e4fcb73a7",
      picture: "https://api.adorable.io/avatars/10",
      age: 35,
      name: "Elliott Larson",
      gender: "male",
      company: "SOLAREN",
      email: "elliottlarson@solaren.com",
      phone: "+1 (997) 541-2086",
    },
    {
      id: "5f215495fb3f8d252921138c",
      picture: "https://api.adorable.io/avatars/11",
      age: 29,
      name: "Kelly Wall",
      gender: "male",
      company: "SONGLINES",
      email: "kellywall@songlines.com",
      phone: "+1 (906) 433-2559",
    },
    {
      id: "5f2154950a506a45e1bf781e",
      picture: "https://api.adorable.io/avatars/12",
      age: 26,
      name: "Hallie Bartlett",
      gender: "female",
      company: "MEDALERT",
      email: "halliebartlett@medalert.com",
      phone: "+1 (886) 468-2691",
    },
    {
      id: "5f21549596e195a11992c4b7",
      picture: "https://api.adorable.io/avatars/13",
      age: 37,
      name: "Wilma Ratliff",
      gender: "female",
      company: "RADIANTIX",
      email: "wilmaratliff@radiantix.com",
      phone: "+1 (962) 513-2429",
    },
    {
      id: "5f2154953240e563432fb455",
      picture: "https://api.adorable.io/avatars/14",
      age: 25,
      name: "Horne Perkins",
      gender: "male",
      company: "OHMNET",
      email: "horneperkins@ohmnet.com",
      phone: "+1 (946) 567-2097",
    },
    {
      id: "5f215495789039ebb158a6bb",
      picture: "https://api.adorable.io/avatars/15",
      age: 23,
      name: "Aileen Bullock",
      gender: "female",
      company: "TYPHONICA",
      email: "aileenbullock@typhonica.com",
      phone: "+1 (832) 472-3259",
    },
    {
      id: "5f2154959d646e3712f3141e",
      picture: "https://api.adorable.io/avatars/16",
      age: 24,
      name: "Pierce Harrison",
      gender: "male",
      company: "FLEXIGEN",
      email: "pierceharrison@flexigen.com",
      phone: "+1 (942) 515-2504",
    },
    {
      id: "5f21549532038b580c19cf3e",
      picture: "https://api.adorable.io/avatars/17",
      age: 26,
      name: "Dyer Carney",
      gender: "male",
      company: "APPLIDEC",
      email: "dyercarney@applidec.com",
      phone: "+1 (835) 549-3110",
    },
  ];

  constructor() { }

  getPerson(id: string) {
    for (let index = 0; index < this.people.length; index++) {
      if(this.people[index].id == id) {
        return this.people[index];
      }
    }

    return null;
  }
}
