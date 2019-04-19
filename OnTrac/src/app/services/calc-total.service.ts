import { Injectable } from '@angular/core';
import {}

@Injectable({
  providedIn: 'root'
})
export class CalcTotalService {

  constructor() { }
  
  
  function totalclasses(){
    var totalClass = 0
    totalClass = courseList.length;
  };

  function totalcreds(){
    var totalCredit = 0;
    for(i=0; i<courseList.length; i++)
    totalCredit += courseList[i].credit;
    console.log(totalCredit);
    };

}
