import emailjs from '@emailjs/browser';
import { Component, signal } from '@angular/core';
import { PageHeaderComponent } from '../../components';
import { HttpStatusCode } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sosinc-appointment',
  standalone: true,
  imports: [PageHeaderComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
})
export class AppointmentComponent {
  public appointmentForm!: FormGroup;
  public isSending = signal<boolean>(false);

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      date: [new Date().toDateString(), Validators.required],
      message: ['', Validators.required],
    });
  }

  isInputValid(controlName: string, errorName: string): boolean {
    if (
      this.appointmentForm.controls[controlName]?.touched &&
      this.appointmentForm.controls[controlName]?.hasError(errorName)
    ) {
      return true;
    }
    return false;
  }

  async onSubmit(): Promise<void> {
    if (!this.appointmentForm.valid) {
      this.toastr.error('Please fill all the fields');
      return;
    }
    try {
      this.isSending.set(true);
      const response = await emailjs.send(
        'service_angzgfi',
        'template_em27ivs',
        {
          to_name: 'there',
          ...this.appointmentForm.value,
        },
        'qivBRNuQUCrknS0_k'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error(
          'Something unexpected happened while sending the message.Please try again.'
        );
        return;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.success('We have received your message.');
        this.appointmentForm.reset();
        return;
      }
    } catch (error: any) {
      if (error?.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error('Message not sent. Try again.');
        return;
      }
    }
  }
}
