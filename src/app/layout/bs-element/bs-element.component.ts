import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';

let images = {
  "1": {
    name: "SOFA ĐƠN",
    src: "../../../assets/images/sofa-type/Airm chair.JPG",
    price: 1300000
  },
  "2": {
    name: "SOFA VÒNG CUNG",
    src: "../../../assets/images/sofa-type/Arc sofa.JPG",
    price: 1500000
  },
  "3": {
    name: "SOFA GÓC",
    src: "../../../assets/images/sofa-type/Corner sofa.JPG",
    price: 1300000
  },
  "4": {
    name: "GHẾ ĐÔN",
    src: "../../../assets/images/sofa-type/Footstool.JPG",
    price: 400000
  },
  "5": {
    name: "GHẾ THƯ GIẢN ĐƠN",
    src: "../../../assets/images/sofa-type/Recliner.JPG",
    price: 2000000
  },
  "6": {
    name: "Sofa Bed",
    src: "../../../assets/images/sofa-type/Sofa bed.JPG",
    price: 1500000
  },
  "7": {
    name: "GHẾ THƯ GIẢN BA",
    src: "../../../assets/images/sofa-type/Three seater reliner.JPG",
    price: 4400000
  },
  "8": {
    name: "SOFA BĂNG BA",
    src: "../../../assets/images/sofa-type/Three seater sofa.JPG",
    price: 1300000
  },
  "9": {
    name: "SOFA BĂNG ĐÔI",
    src: "../../../assets/images/sofa-type/Two seater sofa.JPG",
    price: 1300000
  },
  "10": {
    name: "GHẾ THƯ GIẢN ĐÔI",
    src: "../../../assets/images/sofa-type/Two seater recliner.JPG",
    price: 3200000
  }
};

@Component({
  selector: 'app-bs-element',
  templateUrl: './bs-element.component.html',
  styleUrls: ['./bs-element.component.scss'],
  animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
  id: string;
  imageSource: string;
  sofaName: string;
  difficult: string;
  typeOfFood: string;
  material: string;
  length: number;
  width: number;
  totalPrice: number;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.imageSource = images[this.id].src;
    this.sofaName = images[this.id].name;
  }

  updateDifficult(event: any) {
    this.difficult = event.target.value;
  }

  updateMaterial(event: any) {
    this.material = event.target.value;
  }

  updateTypeOfFoot(event: any) {
    this.typeOfFood = event.target.value;
  }

  calculatePrice() {
    console.log('this.length', this.length);
    console.log('this.width', this.width);
    let s = 0;
    if (this.id === "1") {
      s = this.length + this.width - 800;
    } else {
      s = this.length + this.width;
    }

    s = s / 1000;
    let unitPrice = Number(this.difficult) * Number(this.material) + Number(this.typeOfFood);
    this.totalPrice = s * unitPrice;
  }

  isRecliner(): boolean {
    if (this.id === "5" || this.id === "7" || this.id === "10") {
      return true;
    }
    return false;
  }
}
