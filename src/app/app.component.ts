import { Component, OnInit, Input, ViewChild, ElementRef, ɵɵstylePropInterpolate1 } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a-finsotienda';
  _opened: boolean = false;
  mostrar: boolean = false;
  serch_text = "";

  vProducts: string[] = [
    "arroz roa",
    "cocacola",
    "atún van camp",
    "maiz tostado la especial",
    "pepsi",
    "papas lays",
    "papas pringles",
    "doritos",
    "chococrispis",
    "jugo hit",
    "pastas doria",
    "arroz diana",
    "mccain papas",
    "salsa de tomate fruco",
    "pizza emilia",
    "chocolate jumbo"
  ];

  constructor() {

  }

  onKey(event: any) { // without type info
    this.serch_text = event.target.value;
    const txt = this.serch_text;
    const txt_search = txt.toLowerCase().replace(/\s/g, "");
    if (txt_search == "arrozroa") {
      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    } else if (txt_search == "cocacola" || txt_search == "CocaCola") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    } else if (txt_search == "atunvancamp" || txt_search == "atúnvancamp") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    } else if (txt_search == "maiztostadolaespecial" || txt_search == "maíztostadolaespecial") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "pepsi") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "papaslays") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "papaspringles") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "doritos") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "chococrispis") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "jugohit") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "pastasdoria") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "arrozdiana") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "mccainpapas") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "salsadetomate") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p13");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "pizzaemilla") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p13");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p14");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "chocolatejumbo") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p13");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p14");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p15");
      p16?.setAttribute("class", "con-pro ocultar");
    } else {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro");
    }
    console.log(txt_search);
  }

  public filterPro(inputValue: string) {
    const txt = inputValue;
    const txt_search = txt.toLowerCase().replace(/\s/g, "");
    if (txt_search == "arrozroa") {
      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    } else if (txt_search == "cocacola" || txt_search == "CocaCola") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    } else if (txt_search == "atunvancamp" || txt_search == "atúnvancamp") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    } else if (txt_search == "maiztostadolaespecial" || txt_search == "maíztostadolaespecial") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "pepsi") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "papaslays") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "papaspringles") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "doritos") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "chococrispis") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "jugohit") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "pastasdoria") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "arrozdiana") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "mccainpapas") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "salsadetomate") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p13");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "pizzaemilla") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p13");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p14");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro ocultar");
    }else if (txt_search == "chocolatejumbo") {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro ocultar");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro ocultar");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro ocultar");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro ocultar");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro ocultar");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro ocultar");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro ocultar");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro ocultar");

      const p10 = document.getElementById("p9");
      p10?.setAttribute("class", "con-pro ocultar");

      const p11 = document.getElementById("p10");
      p11?.setAttribute("class", "con-pro ocultar");

      const p12 = document.getElementById("p11");
      p12?.setAttribute("class", "con-pro ocultar");

      const p13 = document.getElementById("p12");
      p13?.setAttribute("class", "con-pro ocultar");

      const p14 = document.getElementById("p13");
      p14?.setAttribute("class", "con-pro ocultar");

      const p15 = document.getElementById("p14");
      p15?.setAttribute("class", "con-pro ocultar");

      const p16 = document.getElementById("p15");
      p16?.setAttribute("class", "con-pro ocultar");
    } else {
      const p1 = document.getElementById("p1");
      p1?.setAttribute("class", "con-pro");

      const p2 = document.getElementById("p2");
      p2?.setAttribute("class", "con-pro");

      const p3 = document.getElementById("p3");
      p3?.setAttribute("class", "con-pro");

      const p4 = document.getElementById("p4");
      p4?.setAttribute("class", "con-pro");

      const p5 = document.getElementById("p5");
      p5?.setAttribute("class", "con-pro");

      const p6 = document.getElementById("p6");
      p6?.setAttribute("class", "con-pro");

      const p7 = document.getElementById("p7");
      p7?.setAttribute("class", "con-pro");

      const p8 = document.getElementById("p8");
      p8?.setAttribute("class", "con-pro");

      const p9 = document.getElementById("p9");
      p9?.setAttribute("class", "con-pro");

      const p10 = document.getElementById("p10");
      p10?.setAttribute("class", "con-pro");

      const p11 = document.getElementById("p11");
      p11?.setAttribute("class", "con-pro");

      const p12 = document.getElementById("p12");
      p12?.setAttribute("class", "con-pro");

      const p13 = document.getElementById("p13");
      p13?.setAttribute("class", "con-pro");

      const p14 = document.getElementById("p14");
      p14?.setAttribute("class", "con-pro");

      const p15 = document.getElementById("p15");
      p15?.setAttribute("class", "con-pro");

      const p16 = document.getElementById("p16");
      p16?.setAttribute("class", "con-pro");
    }
  }

  public mostrarOcultar(): void {
    if (this.mostrar) {
      this.mostrar = false;
      const elementoDiv = document.getElementById("sideMenu");
      const elementoRM = document.getElementById("res_right");
      const elementoMP = document.getElementById("main_page");
      const elementoA = document.getElementById("i_arrow");
      elementoA?.setAttribute("class", "icon-arrow rotate");
      elementoDiv?.setAttribute("class", "left-menu");
      elementoRM?.setAttribute("class", "right-menu");
      elementoMP?.setAttribute("class", "main-page");
      console.log("mostrado");
    } else {
      this.mostrar = true;
      const elementoDiv = document.getElementById("sideMenu");
      const elementoRM = document.getElementById("res_right");
      const elementoMP = document.getElementById("main_page");
      const elementoA = document.getElementById("i_arrow");
      elementoA?.setAttribute("class", "icon-arrow");
      elementoDiv?.setAttribute("class", "left-menu ocultar");
      elementoRM?.setAttribute("class", "right-menu-responsive");
      elementoMP?.setAttribute("class", "main-page-responsive");
      console.log("mostrado");
      console.log("Ocultado");
    }
  }

  valor: number = 0;
  valorTotalText: number = 0;

  public increment(inputValue: string) {
    this.valor = parseInt(inputValue);
    this.valor = this.valor + 1;
    let pp1: any;
    let elementoId = !!document.getElementById("prin1");

    if (this.valor > 0 && elementoId == false) {
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
      align-items: center;
      justify-content: center;
      position: relative;`);
      prin.setAttribute('id', `prin1`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);
      const el = document.createElement("div");
      el.setAttribute('style',
        ` height: 40px;
          width: 100%; 
          padding: 10px 5px 10px 5px; 
          display: flex;
          align-items: center;
          justify-content: center;`);
      el.setAttribute('id', `boxpro`);
      const pro1 = document.getElementById('prin1');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.setAttribute('style', `font-size: 12px;`);
      pp1.textContent = `Arroz Roa x ` + this.valor + ``;
      const boxpro = document.getElementById("boxpro");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono`);

      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin1");
        e_a_icono?.remove();
        this.valor = 0;
      });

      const pro12 = document.getElementById('boxpro');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono');
      pro11?.appendChild(icono);
    }


  }

  public decrement(inputValue: string) {
    this.valor = parseInt(inputValue);

    if (this.valor <= 0) {

    } else {
      this.valor = this.valor - 1;
      console.log(this.valor);
    }

    if (this.valor == 0) {
      const element = document.getElementById("prin1");
      element?.remove();
    }
  }

  valor1: number = 0;

  public increment1(inputValue: string) {
    this.valor1 = parseInt(inputValue);
    this.valor1 = this.valor1 + 1;
    let pp1: any;
    let elementoId = !!document.getElementById("prin12");

    if (this.valor1 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin12`);
      prin.setAttribute('class', `slideInLeft`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro12`);
      const pro1 = document.getElementById('prin12');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Coca-Cola  x ` + this.valor1 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro12");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono12`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin12");
        e_a_icono?.remove();
        this.valor1 = 0
      });


      const pro12 = document.getElementById('boxpro12');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono12');
      pro11?.appendChild(icono);
    }
  }

  public decrement1(inputValue: string) {
    this.valor1 = parseInt(inputValue);

    if (this.valor1 <= 0) {

    } else {
      this.valor1 = this.valor1 - 1;
    }

    if (this.valor1 == 0) {
      const element = document.getElementById("prin12");
      element?.remove();
    }
  }

  valor2: number = 0;

  public increment2(inputValue: string) {
    this.valor2 = parseInt(inputValue);
    this.valor2 = this.valor2 + 1;
    let pp1: any;
    let elementoId = !!document.getElementById("prin2");

    if (this.valor2 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin2`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro2`);
      const pro1 = document.getElementById('prin2');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Atún Van Camp  x ` + this.valor2 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro2");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono2`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin2");
        e_a_icono?.remove();
        this.valor2 = 0
      });
      const pro12 = document.getElementById('boxpro2');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono2');
      pro11?.appendChild(icono);
    }
  }

  public decrement2(inputValue: string) {
    this.valor2 = parseInt(inputValue);

    if (this.valor2 <= 0) {

    } else {
      this.valor2 = this.valor2 - 1;
    }

    if (this.valor2 == 0) {
      const element = document.getElementById("prin2");
      element?.remove();
    }
  }

  valor3: number = 0;

  public increment3(inputValue: string) {
    this.valor3 = parseInt(inputValue);
    this.valor3 = this.valor3 + 1;
    let elementoId = !!document.getElementById("prin3");

    let pp1: any;

    if (this.valor3 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin3`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro13`);
      const pro1 = document.getElementById('prin3');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Maíz tostado la especial  x ` + this.valor3 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro13");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono13`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin3");
        e_a_icono?.remove();
        this.valor3 = 0
      });
      const pro12 = document.getElementById('boxpro13');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono13');
      pro11?.appendChild(icono);
    }


  }

  public decrement3(inputValue: string) {
    this.valor3 = parseInt(inputValue);

    if (this.valor3 <= 0) {

    } else {
      this.valor3 = this.valor3 - 1;
    }

    if (this.valor3 == 0) {
      const element = document.getElementById("prin3");
      element?.remove();
    }
  }

  valor4: number = 0;

  public increment4(inputValue: string) {
    this.valor4 = parseInt(inputValue);
    this.valor4 = this.valor4 + 1;
    let elementoId = !!document.getElementById("prin4");

    let pp1: any;

    if (this.valor4 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin4`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro14`);
      const pro1 = document.getElementById('prin4');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Pepsi  x ` + this.valor4 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro14");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono14`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin4");
        e_a_icono?.remove();
        this.valor4 = 0
      });
      const pro12 = document.getElementById('boxpro14');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono14');
      pro11?.appendChild(icono);
    }


  }

  public decrement4(inputValue: string) {
    this.valor4 = parseInt(inputValue);

    if (this.valor4 <= 0) {

    } else {
      this.valor4 = this.valor4 - 1;
    }

    if (this.valor4 == 0) {
      const element = document.getElementById("prin4");
      element?.remove();
    }
  }

  valor5: number = 0;

  public increment5(inputValue: string) {
    this.valor5 = parseInt(inputValue);
    this.valor5 = this.valor5 + 1;
    let elementoId = !!document.getElementById("prin5");

    let pp1: any;

    if (this.valor5 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin5`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro15`);
      const pro1 = document.getElementById('prin5');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Papas Lays  x ` + this.valor5 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro15");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono15`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin5");
        e_a_icono?.remove();
        this.valor5 = 0
      });
      const pro12 = document.getElementById('boxpro15');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono15');
      pro11?.appendChild(icono);
    }


  }

  public decrement5(inputValue: string) {
    this.valor5 = parseInt(inputValue);

    if (this.valor5 <= 0) {

    } else {
      this.valor5 = this.valor5 - 1;
    }

    if (this.valor5 == 0) {
      const element = document.getElementById("prin5");
      element?.remove();
    }
  }


  valor6: number = 0;

  public increment6(inputValue: string) {
    this.valor6 = parseInt(inputValue);
    this.valor6 = this.valor6 + 1;
    let elementoId = !!document.getElementById("prin6");

    let pp1: any;

    if (this.valor6 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin6`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro16`);
      const pro1 = document.getElementById('prin6');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Papas Pringles  x ` + this.valor6 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro16");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono16`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin6");
        e_a_icono?.remove();
        this.valor6 = 0
      });
      const pro12 = document.getElementById('boxpro16');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono16');
      pro11?.appendChild(icono);
    }


  }

  public decrement6(inputValue: string) {
    this.valor6 = parseInt(inputValue);

    if (this.valor6 <= 0) {

    } else {
      this.valor6 = this.valor6 - 1;
    }

    if (this.valor6 == 0) {
      const element = document.getElementById("prin6");
      element?.remove();
    }
  }



  valor7: number = 0;

  public increment7(inputValue: string) {
    this.valor7 = parseInt(inputValue);
    this.valor7 = this.valor7 + 1;
    let elementoId = !!document.getElementById("prin7");

    let pp1: any;

    if (this.valor7 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin7`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro17`);
      const pro1 = document.getElementById('prin7');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Doritos  x ` + this.valor7 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro17");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono17`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin7");
        e_a_icono?.remove();
        this.valor7 = 0
      });
      const pro12 = document.getElementById('boxpro17');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono17');
      pro11?.appendChild(icono);
    }


  }

  public decrement7(inputValue: string) {
    this.valor7 = parseInt(inputValue);

    if (this.valor7 <= 0) {

    } else {
      this.valor7 = this.valor7 - 1;
    }

    if (this.valor7 == 0) {
      const element = document.getElementById("prin7");
      element?.remove();
    }
  }



  valor8: number = 0;

  public increment8(inputValue: string) {
    this.valor8 = parseInt(inputValue);
    this.valor8 = this.valor8 + 1;
    let elementoId = !!document.getElementById("prin8");

    let pp1: any;

    if (this.valor8 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin8`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro18`);
      const pro1 = document.getElementById('prin8');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Chococrispis  x ` + this.valor8 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro18");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono18`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin8");
        e_a_icono?.remove();
        this.valor8 = 0
      });
      const pro12 = document.getElementById('boxpro18');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono18');
      pro11?.appendChild(icono);
    }


  }

  public decrement8(inputValue: string) {
    this.valor8 = parseInt(inputValue);

    if (this.valor8 <= 0) {

    } else {
      this.valor8 = this.valor8 - 1;
    }

    if (this.valor8 == 0) {
      const element = document.getElementById("prin8");
      element?.remove();
    }
  }



  valor9: number = 0;

  public increment9(inputValue: string) {
    this.valor9 = parseInt(inputValue);
    this.valor9 = this.valor9 + 1;
    let elementoId = !!document.getElementById("prin9");

    let pp1: any;

    if (this.valor9 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin9`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro19`);
      const pro1 = document.getElementById('prin9');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Jugo Hit  x ` + this.valor9 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro19");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono19`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin9");
        e_a_icono?.remove();
        this.valor9 = 0
      });
      const pro12 = document.getElementById('boxpro19');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono19');
      pro11?.appendChild(icono);
    }


  }

  public decrement9(inputValue: string) {
    this.valor9 = parseInt(inputValue);

    if (this.valor9 <= 0) {

    } else {
      this.valor9 = this.valor9 - 1;
    }

    if (this.valor9 == 0) {
      const element = document.getElementById("prin9");
      element?.remove();
    }
  }



  valor10: number = 0;

  public increment10(inputValue: string) {
    this.valor10 = parseInt(inputValue);
    this.valor10 = this.valor10 + 1;
    let elementoId = !!document.getElementById("prin10");

    let pp1: any;

    if (this.valor10 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin10`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro110`);
      const pro1 = document.getElementById('prin10');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Pastas Doria  x ` + this.valor10 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro110");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono110`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin10");
        e_a_icono?.remove();
        this.valor10 = 0
      });
      const pro12 = document.getElementById('boxpro110');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono110');
      pro11?.appendChild(icono);
    }


  }

  public decrement10(inputValue: string) {
    this.valor10 = parseInt(inputValue);

    if (this.valor10 <= 0) {

    } else {
      this.valor10 = this.valor10 - 1;
    }

    if (this.valor10 == 0) {
      const element = document.getElementById("prin10");
      element?.remove();
    }
  }


  valor11: number = 0;

  public increment11(inputValue: string) {
    this.valor11 = parseInt(inputValue);
    this.valor11 = this.valor11 + 1;
    let elementoId = !!document.getElementById("prin11");

    let pp1: any;

    if (this.valor11 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin11`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro111`);
      const pro1 = document.getElementById('prin11');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Arroz Diana  x ` + this.valor11 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro111");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono111`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin11");
        e_a_icono?.remove();
        this.valor11 = 0
      });
      const pro12 = document.getElementById('boxpro111');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono111');
      pro11?.appendChild(icono);
    }


  }

  public decrement11(inputValue: string) {
    this.valor11 = parseInt(inputValue);

    if (this.valor11 <= 0) {

    } else {
      this.valor11 = this.valor11 - 1;
    }

    if (this.valor11 == 0) {
      const element = document.getElementById("prin11");
      element?.remove();
    }
  }















  valor12: number = 0;

  public increment12(inputValue: string) {
    this.valor12 = parseInt(inputValue);
    this.valor12 = this.valor12 + 1;
    let elementoId = !!document.getElementById("prin12");

    let pp1: any;

    if (this.valor12 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin12`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro112`);
      const pro1 = document.getElementById('prin12');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `MCcain Papas  x ` + this.valor12 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro112");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono112`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin12");
        e_a_icono?.remove();
        this.valor12 = 0
      });
      const pro12 = document.getElementById('boxpro112');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono112');
      pro11?.appendChild(icono);
    }


  }

  public decrement12(inputValue: string) {
    this.valor12 = parseInt(inputValue);

    if (this.valor12 <= 0) {

    } else {
      this.valor12 = this.valor12 - 1;
    }

    if (this.valor12 == 0) {
      const element = document.getElementById("prin12");
      element?.remove();
    }
  }



  valor13: number = 0;

  public increment13(inputValue: string) {
    this.valor13 = parseInt(inputValue);
    this.valor13 = this.valor13 + 1;
    let elementoId = !!document.getElementById("prin13");

    let pp1: any;

    if (this.valor13 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin13`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro113`);
      const pro1 = document.getElementById('prin13');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Salsa de tomate fruco  x ` + this.valor13 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro113");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono113`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin13");
        e_a_icono?.remove();
        this.valor13 = 0
      });
      const pro12 = document.getElementById('boxpro113');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono113');
      pro11?.appendChild(icono);
    }


  }

  public decrement13(inputValue: string) {
    this.valor13 = parseInt(inputValue);

    if (this.valor13 <= 0) {

    } else {
      this.valor13 = this.valor13 - 1;
    }

    if (this.valor13 == 0) {
      const element = document.getElementById("prin13");
      element?.remove();
    }
  }



  valor14: number = 0;

  public increment14(inputValue: string) {
    this.valor14 = parseInt(inputValue);
    this.valor14 = this.valor14 + 1;
    let elementoId = !!document.getElementById("prin14");

    let pp1: any;

    if (this.valor14 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin14`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro114`);
      const pro1 = document.getElementById('prin14');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Pizza Emillia  x ` + this.valor14 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro114");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono114`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin14");
        e_a_icono?.remove();
        this.valor14 = 0
      });
      const pro12 = document.getElementById('boxpro114');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono114');
      pro11?.appendChild(icono);
    }


  }

  public decrement14(inputValue: string) {
    this.valor14 = parseInt(inputValue);

    if (this.valor14 <= 0) {

    } else {
      this.valor14 = this.valor14 - 1;
    }

    if (this.valor14 == 0) {
      const element = document.getElementById("prin14");
      element?.remove();
    }
  }


  valor15: number = 0;

  public increment15(inputValue: string) {
    this.valor15 = parseInt(inputValue);
    this.valor15 = this.valor15 + 1;
    let elementoId = !!document.getElementById("prin15");

    let pp1: any;

    if (this.valor15 > 0 && elementoId == false) {
      /* const pro1 = document.getElementById("pro1"); */
      const prin = document.createElement("div");
      prin.setAttribute('style',
        ` display: flex;
        align-items: center;
        justify-content: center;
        position: relative;`);
      prin.setAttribute('id', `prin15`);
      const prin1 = document.getElementById('pro1');
      prin1?.appendChild(prin);

      const el = document.createElement("div");
      el.setAttribute('style', `height: 40px;
          width: 100%; padding: 10px 5px 10px 5px; display: flex;align-items: center;
          justify-content: center;
          position: relative;`);
      el.setAttribute('id', `boxpro115`);
      const pro1 = document.getElementById('prin15');
      pro1?.appendChild(el);


      pp1 = document.createElement("p");
      pp1.textContent = `Chocolate Jumbo  x ` + this.valor15 + ``;
      pp1.setAttribute('style', `font-size: 12px;`);
      const boxpro = document.getElementById("boxpro115");
      boxpro?.appendChild(pp1);


      const a_icono = document.createElement("a");
      a_icono.setAttribute('id', `aicono115`);
      a_icono.addEventListener('click', () => {
        const e_a_icono = document.getElementById("prin15");
        e_a_icono?.remove();
        this.valor15 = 0
      });
      const pro12 = document.getElementById('boxpro115');
      pro12?.appendChild(a_icono);

      const icono = document.createElement("i");
      icono.setAttribute('class', `fa-solid fa-trash-can`);
      icono.setAttribute('style', `color: var(--red); margin-left: 1em; position: absolute; right: 100px;position: absolute; right: 10;`);
      const pro11 = document.getElementById('aicono115');
      pro11?.appendChild(icono);
    }


  }

  public decrement15(inputValue: string) {
    this.valor15 = parseInt(inputValue);

    if (this.valor15 <= 0) {

    } else {
      this.valor15 = this.valor15 - 1;
    }

    if (this.valor15 == 0) {
      const element = document.getElementById("prin15");
      element?.remove();
    }
  }



  public calcular() {
    this.valorTotalText =
      (1200 * this.valor) + (1000 * this.valor1) + (3500 * this.valor2) + (1000 * this.valor3) +

      (1000 * this.valor4) + (1500 * this.valor5) +
      (4800 * this.valor6) + (2000 * this.valor7) +

      (22000 * this.valor8) + (1000 * this.valor9) +
      (2500 * this.valor10) + (3000 * this.valor11) +

      (14000 * this.valor12) + (2200 * this.valor13) +
      (18000 * this.valor14) + (3000 * this.valor15);
    /* console.log(""); */
  }

  public fun_delete() {
    console.log("¡Borrado!");
  }

  public vender() {
    this.valor = 0;
    this.valor1 = 0;
    this.valor2 = 0;
    this.valor3 = 0;
    this.valor4 = 0;
    this.valor5 = 0;
    this.valor6 = 0;
    this.valor7 = 0;
    this.valor8 = 0;
    this.valor9 = 0;
    this.valor10 = 0;
    this.valor11 = 0;
    this.valor12 = 0;
    this.valor13 = 0;
    this.valor14 = 0;
    this.valor15 = 0;
    this.valorTotalText = 0
  }


}
