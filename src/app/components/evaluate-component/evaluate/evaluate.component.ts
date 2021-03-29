import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {

  @Input() getScore: any;

  constructor() { }
  

  ngOnInit(): void {
  }

  scoreSelected(score: number) {
    this.getScore.forEach( (element: any) => {
      const currentStart: any = document.getElementById(element.id);
      score >= element.id ? currentStart.classList.remove("noChecked") : currentStart.classList.add("noChecked");
    });
  }

}
