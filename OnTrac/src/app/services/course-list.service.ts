import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

courseList: [
  { name: 'INTRO TO PHYSICAL GEOLOGY', credit: 3},
  { name: 'INTRO TO HISTORICAL GEOLOGY', credit: 3},
  { name: 'GEOSCIENCE DATA ANALYSIS AND MODELING', credit: 3},
  { name: 'MINERALOGY', credit: 3},
  { name: 'MINERALOGY LABORATORY', credit: 3},
  { name: 'STRUCTURAL GEOLOGY', credit: 3},
  { name: 'STRUCTURAL GEOLOGY FIELD METHODS', credit: 3},
  { name: 'INTRODUCTION TO SEDIMENTARY GEOLOGY', credit: 3},
  { name: 'ADVANCED FIELD COURSE', credit: 3},
  { name: 'PROCESS GEOMORPHOLOGY', credit: 3},
  { name: 'CRITICAL ZONE SCIENCE', credit: 3},
  { name: 'SOIL GENESIS, MORPHOLOGY AND CLASSIFICATION', credit: 3},
  { name: 'SENIOR THESIS', credit: 3},
  { name: 'GENERAL PHYSICS-CALCULUS LEVEL', credit: 3},
  { name: 'GENERAL PHYSICS LABORATORY II', credit: 3},
  { name: 'FUNDAMENTALS OF COLLEGE CHEMISTRY', credit: 3},
  { name: 'FUNDAMENTALS OF COLLEGE CHEMISTRY LABORATORY', credit: 1},
  { name: 'GENERAL PHYSICS I WITH ALGEBRA', credit: 3},
  { name: 'GENERAL PHYSICS LABORATORY I', credit: 3},
  { name: 'GENERAL CHEMISTRY I', credit: 3},
  { name: 'GENERAL CHEMISTRY I LABORATORY', credit: 1},
  { name: 'GENERAL CHEMISTRY II', credit: 3},
  { name: 'GENERAL CHEMISTRY II LABORATORY', credit: 1},
  { name: 'GEOCHEMISTRY', credit: 3},
  { name: 'CALCULUS I', credit: 3},
  { name: 'CALCULUS II', credit: 3},
  { name: 'GEOPHYSICS', credit: 3}
]

  constructor() { }
}
