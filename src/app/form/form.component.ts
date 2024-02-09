import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { CategoryService } from '../service';
import { Router ,ActivatedRoute } from '@angular/router';
import { Category } from '../shared/model/category';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports:[CommonModule,FormsModule,ReactiveFormsModule],
})
export class FormComponent {
  categoryForm: FormGroup;  
  isUpdate=false;
  id=this.findKey();
ngForm: FormGroup<any> | undefined;
  constructor(private fb:FormBuilder,private router: Router,private categoryService: CategoryService,private route: ActivatedRoute) {  
    
    this.categoryForm = this.fb.group({  
      name: '',
      source:'English',
      target:'Hebrew',  
      words: this.fb.array([]) ,  
    });  
  }  
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.categoryForm=this.fb.group({  
        name: this.categoryService.getCategory(id)?.categoryName,
        source:this.categoryService.getCategory(id)?.sourceLanguage,
        target:this.categoryService.getCategory(id)?.targetLanguage,  
        words: this.fb.array([])
      });

      const wordsArray = this.categoryForm.get('words') as FormArray;
      this.categoryService.getCategory(id)?.wordPairs.forEach(wordPair => {
        wordsArray.push(this.fb.group({
          origin: wordPair.origin,
          target: wordPair.target
        }));
      });
      this.isUpdate=true;
      this.id=id;
    }
  }
  
  findKey(): number {
    const categoriesMap = this.categoryService.getCategories();
  
    if (!categoriesMap) {
      return 1; 
    }
  
    let maxKey: number | null = null;
  
    for (const key of categoriesMap.keys()) {
      if (maxKey === null || key > maxKey) {
        maxKey = key;
      }
    }
  
    return (maxKey !== null ? maxKey : 0) + 1;
  }

  words() : FormArray {  
    return this.categoryForm.get("words") as FormArray  
  }  
     
  newWord(): FormGroup {  
    return this.fb.group({  
      origin: '',  
      target: '',  
    })  
  }  
     
  addWord() {  
    this.words().push(this.newWord());  
  }  
     
  removeWord(i:number) {  
    this.words().removeAt(i);  
  }  
     
  onSubmit() {  
    let cat:Category = new Category(this.categoryForm.value.name,this.id,new Date(),this.categoryForm.value.source,this.categoryForm.value.target,this.categoryForm.value.words);
    if(this.isUpdate){
      this.categoryService.updateCategory(this.id,cat);
    }else{
      this.categoryService.addCategory(this.id,cat);
    }
    this.router.navigate(['']);  
  }  
}
