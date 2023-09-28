import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tools-newsletters',
  templateUrl: './newsletters.component.html',
})
export class NewslettersComponent implements OnInit {
  title: string = 'Generate your own newsletter';
  formGroup!: FormGroup;
  preview: boolean = false;
  loading: boolean = true;
  urlPattern: RegExp = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[\/#?]?.*$/;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.creatingForm();
  }

  creatingForm() {
    this.formGroup = this.formBuilder.group({
      categories: this.formBuilder.array([
        this.formBuilder.group({
          category: ['', Validators.required],
          news: this.formBuilder.array([
            this.formBuilder.group({
              title: ['', Validators.required],
              link: [
                null,
                [Validators.required, Validators.pattern(this.urlPattern)],
              ],
            }),
          ]),
        }),
      ]),
    });

    this.loading = false;
  }

  createCategoryField() {
    return this.formBuilder.group({
      category: ['', Validators.required],
      news: this.formBuilder.array([]),
    });
  }

  createNewsField() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      link: [null, [Validators.required, Validators.pattern(this.urlPattern)]],
    });
  }

  addCategory() {
    this.CategoriesField.push(this.createCategoryField());
  }

  addNew(index: number) {
    const news = this.getNewsField(index);
    news.push(this.createNewsField());
  }

  get CategoriesField() {
    return this.formGroup.get('categories') as FormArray;
  }

  get Values() {
    return this.formGroup.value.categories;
  }

  getNewsField(index: number): FormArray {
    const category = this.CategoriesField.at(index) as FormGroup;
    return category.get('news') as FormArray;
  }

  previewNewsletter() {
    this.preview = !this.preview;
  }
}
