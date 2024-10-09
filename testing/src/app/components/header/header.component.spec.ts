import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Home and login in menu', () => {
    const aes = fixture.nativeElement.querySelectorAll('a');
    expect(aes.length).toBe(2)
  });

  it('should show Profile and logout when Logged in', () => {
    component.loggedIn.set(true);
    fixture.detectChanges();
    const aes = fixture.nativeElement.querySelectorAll('a');
    expect(aes.length).toBe(2)
    expect(aes[1].textContent).toBe('Profile');

    const button = fixture.debugElement.query(By.css('button'));

    expect(button.nativeElement.textContent).toBe('Log out');
  });

  it('should show log out when click', () => {
    component.loggedIn.set(true);
    fixture.detectChanges();
    
    const button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click');
    // assert
    expect(component.loggedIn()).toBe(false);
  });
});
