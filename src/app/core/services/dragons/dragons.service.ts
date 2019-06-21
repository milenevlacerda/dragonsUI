import { Injectable } from '@angular/core';
import axios from 'axios';
import Dragon from '../../models/dragon.model';


const BASEURL = 'https://dragons-api.herokuapp.com/api/dragons';

@Injectable({
  providedIn: 'root'
})

export class DragonsService {

  public listDragons(size: number) {
    return axios.get(BASEURL, { params: { size } })
      .then(res => res.data);
  } 

  public getDragon(slug: string) {
    return axios.get(`${BASEURL}/${slug}`)
      .then( res => res.data);
  }

  public createNewDragon(data: Dragon) {
    return axios.post(BASEURL, data)
      .then( res => res.data);
  }

  public deleteDragon(slug: string) {
    return axios.delete(`${BASEURL}/${slug}`);
  }

  public updateDragon(slug, dragon: Dragon) {
    return axios.put(`${BASEURL}/${slug}`, dragon);
  }

  constructor() { }
}
