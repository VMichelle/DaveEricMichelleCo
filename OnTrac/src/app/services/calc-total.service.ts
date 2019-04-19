import { Injectable } from '@angular/core';
import { courseList } from './course-list.service'
@Injectable({
  providedIn: 'root'
})
export class CalcTotalService {
  private courseLists: courseList[] = [];

  constructor(private courselist: CourseListService) { }

  getTotal() {
    function total() {
      var totalClass = 0
      var totalCredit = 0;
      totalClass = courseList.length;
      for (i = 0; i < courseList.length; i++)
        totalCredit += courseList[i].credit;
    }
    return 'Total Classes: ${totalClass} Total Credits: ${totalCredit}';
  }
}
