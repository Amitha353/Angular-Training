import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerCardComponent } from './customers/customer-card/customer-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    // TestBed - Test simulation environment
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomersComponent,
        CustomerCardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    // fixture include the component, template, css, decorator, DOM etc
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'customer-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('customer-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // important to ensure data-binding
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to customer-app!');
  });
});
