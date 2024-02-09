import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ButtonComponent } from "./button/button.component";
import { FooterComponent } from "./footer/footer.component";
import { FormComponent } from './form/form.component';
import { CategoryTableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from './service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,FormComponent, RouterOutlet, HeaderComponent, ButtonComponent,MatDialogModule, FooterComponent,CategoryTableComponent,MatTableModule,MatButtonModule,MatIconModule],
    providers: [CategoryService]
})
export class AppComponent {
  title = 'Little-Linguist';
}
