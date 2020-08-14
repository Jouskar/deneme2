import { Injectable } from '@angular/core';
import materials from "../material-list.json";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() { }
  
  materialFixed = materials;

  getMaterials() {
    this.materialFixed.forEach(material => {
      material.code = material.code.trim();
      material.title = material.title.replace(material.code + ' ', '');
    })
    return this.materialFixed;
  }
}

export class Material {
  code: string;
  title: string;
}
