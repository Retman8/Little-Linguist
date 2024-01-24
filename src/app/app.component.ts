import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ButtonComponent } from "./button/button.component";
import { FooterComponent } from "./footer/footer.component";
import { CategoryTableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, ButtonComponent, FooterComponent,CategoryTableComponent,MatTableModule,MatButtonModule,MatIconModule]
})
export class AppComponent {
  title = 'Little-Linguist';
}
