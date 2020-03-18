// import { FormBuilder } from '@angular/forms';
// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;

//   beforeEach(() => {
//     component = new LoginComponent(new FormBuilder);
//   });

//   it('should create a form with two input fields', () => {
//     expect(component.loginForm.contains('username')).toBeTruthy();
//     expect(component.loginForm.contains('password')).toBeTruthy();
//   });

//   it('should validate username input field', () => {
//     let control = component.loginForm.get('username');

//     control.setValue(''); // set value to an empty string

//     expect(control.valid).toBeFalsy();
//   });

//   it('should validate password input field', () => {
//     let control = component.loginForm.get('password');

//     control.setValue('');

//     expect(control.valid).toBeFalsy();
//   });
// });
