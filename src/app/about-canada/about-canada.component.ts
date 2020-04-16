import { Component, OnInit } from '@angular/core';
import { CanadaService } from '../services/canada.service';

@Component({
  selector: 'app-about-canada',
  templateUrl: './about-canada.component.html',
  styleUrls: ['./about-canada.component.less']
})
export class AboutCanadaComponent implements OnInit {
  canadaData: object;
  title: string;
  itemList: any;
  loader: boolean = true;

  constructor(private canadaService: CanadaService) { }

  ngOnInit(): void {
    this.loader = true;
    this.canadaService.getList().subscribe((data: any) => {
      this.canadaData = data;
      this.title = data.title;
      this.itemList = data.rows;
      this.loader = false;
    });
  }

  refresh() {
    this.ngOnInit();
  }
}
