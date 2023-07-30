import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GeneratorsService } from '../../services/generators.service';
import { Tools } from '../../models/tools.model';

@Component({
  selector: 'app-generators',
  templateUrl: './generators.component.html',
})
export class GeneratorsComponent implements OnInit {
  title: string = 'Generators';
  formGroup!: FormGroup;
  generators!: Tools[];

  constructor(
    private formBuilder: FormBuilder,
    private generatorsService: GeneratorsService
  ) {}

  ngOnInit(): void {
    this.getGenerators();
  }

  creatingForm() {
    this.formGroup = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      link: [null, Validators.required],
      category: [null, Validators.required],
      img: [null, Validators.required],
    });
  }

  getGenerators() {
    this.generatorsService.getGenerators().subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.generators = response;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async addGenerator() {
    await this.generatorsService.addGenerator(this.formGroup.value);
  }
}
