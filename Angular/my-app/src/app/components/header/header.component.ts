import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  subtitle: string = "I'm a subtitle from ts";
  displaySubtitle: boolean = true;

  constructor(private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.coreService.getPreviousJobs();
  }

  showSubtitle() {
    //this.displaySubtitle = !this.displaySubtitle;
  }

  changeSubtitle(newSubtitle: string) {
    this.subtitle = newSubtitle;
  }
}