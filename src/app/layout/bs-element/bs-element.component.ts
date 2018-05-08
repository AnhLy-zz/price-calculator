import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';

let images = {
  "1": {name: "SOFA ĐƠN", src:"../../../assets/images/sofa-type/Airm chair.JPG"},
  "2": {name: "SOFA VÒNG CUNG", src: "../../../assets/images/sofa-type/Arc sofa.JPG"},
  "3": {name: "SOFA GÓC", src:"../../../assets/images/sofa-type/Corner sofa.JPG"},
  "4": {name: "GHẾ ĐÔN", src:"../../../assets/images/sofa-type/Footstool.JPG"},
  "5": {name: "GHẾ THƯ GIẢN ĐƠN", src:"../../../assets/images/sofa-type/Recliner.JPG"},
  "6": {name: "Sofa Bed", src:"../../../assets/images/sofa-type/Sofa bed.JPG"},
  "7": {name: "GHẾ THƯ GIẢN BA", src:"../../../assets/images/sofa-type/Three seater reliner.JPG"},
  "8": {name: "SOFA BĂNG BA", src:"../../../assets/images/sofa-type/Three seater sofa.JPG"},
  "9": {name: "SOFA ĐÔI", src:"../../../assets/images/sofa-type/Two seater sofa.JPG"},
  "10": {name: "GHẾ THƯ GIẢN ĐÔI", src:"../../../assets/images/sofa-type/Two seater recliner.JPG"}
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
  kindOfFoot: string;
  material: string;
  length: number;
  width: number;
  total: number;
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

  updateKindOfFoot(event: any) {
    this.kindOfFoot = event.target.value;
  }

  calculatePrice() {
    console.log('this.length',this.length);
    console.log('this.width',this.width);
    if (this.id === "1") {

    } else {

    }
  }
}
