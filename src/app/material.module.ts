import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
@NgModule({
    imports: [MatInputModule,MatCardModule,MatButtonModule,MatButtonToggleModule],
    exports: [MatInputModule,MatCardModule,MatButtonModule,MatButtonToggleModule]
})
export class MyMaterialModule { }