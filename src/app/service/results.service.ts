import { Injectable } from '@angular/core';
import { AnnualDataModel } from '../../components/investment-results/investment-results.model';
import { FormDataModel } from '../../components/user-input/user-input.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResultsService {
  private formDataSubject = new BehaviorSubject<FormDataModel | null>(null);
  private annualDataSubject = new BehaviorSubject<AnnualDataModel[]>([]);

  setFormData(formData: FormDataModel) {
    this.formDataSubject.next(formData);
  }

  getFormData() {
    return this.formDataSubject.asObservable();
  }

  setAnnualData(annualData: AnnualDataModel[]) {
    this.annualDataSubject.next(annualData);
  }

  getAnnualData() {
    return this.annualDataSubject.asObservable();
  }
}
