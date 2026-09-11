import { Component } from '@angular/core';
import { Badge } from '../badge/badge';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [Badge],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
