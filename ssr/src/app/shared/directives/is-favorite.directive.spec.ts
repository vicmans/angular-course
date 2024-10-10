import { Component, DebugElement } from '@angular/core';
import { IsFavoriteDirective } from './is-favorite.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `
    <div [isFavorite]="favorite" data-testid="favorite"></div>
  `,
  imports: [IsFavoriteDirective],
})
class HostComponent {
  favorite = false
}

describe('IsFavoriteDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let myElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsFavoriteDirective, HostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    myElement = fixture.debugElement.query(By.directive(IsFavoriteDirective));
  });

  it('should should have red color', () => {
    fixture.componentInstance.favorite = true
    fixture.detectChanges();
    const bgColor = myElement.nativeElement.style.fill;
    expect(bgColor).toBe('red');
  });
});
