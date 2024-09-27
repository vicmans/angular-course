import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { NgComponentOutlet } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgComponentOutlet, ButtonComponent],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private adList = inject(AppService).getAds();

  private currentAdIndex = 0;
  sub!: Subscription;

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  ngOnInit() {
    this.sub = interval(3000).subscribe(() => {
      this.displayNextAd()
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  displayNextAd() {
    this.currentAdIndex++;
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }
}
