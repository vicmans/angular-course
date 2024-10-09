import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have and Login user button', () => {
    const btn = fixture.debugElement.query(By.css('[data-testid=userbutton]'))
    expect(btn.nativeElement.textContent).toBe('Login User');
  });

  it('should have and Admin login button', () => {
    const btn = fixture.debugElement.query(By.css('[data-testid=adminbutton]'))
    expect(btn.nativeElement.textContent).toBe('Login Admin');
  });

  it('should have as user user', () => {
    const btn = fixture.debugElement.query(By.css('[data-testid=userbutton]'))
    btn.triggerEventHandler('click');
    
    expect(component.auth.isAdmin()).toBe(false);
    expect(component.auth.logged()).toBe(true);
  });

  it('should login as Admin user', () => {
    const btn = fixture.debugElement.query(By.css('[data-testid=adminbutton]'))
    btn.triggerEventHandler('click');
    
    expect(component.auth.isAdmin()).toBe(true);
    expect(component.auth.logged()).toBe(true);
  });
});
