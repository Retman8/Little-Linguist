import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTableComponent } from './table.component';
import { Component } from '@angular/core';


describe('TableComponent', () => {
  let component: CategoryTableComponent;
  let fixture: ComponentFixture<CategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

  it('should create', () => {
    expect(Component).toBeTruthy();
  });

