import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';


@NgModule({
    imports: [MatPasswordStrengthModule,MatProgressBarModule,MatInputModule,MatCardModule,MatButtonModule,MatButtonToggleModule],
    exports: [MatPasswordStrengthModule,MatProgressBarModule,MatInputModule,MatCardModule,MatButtonModule,MatButtonToggleModule]
})
export class MyMaterialModule { }