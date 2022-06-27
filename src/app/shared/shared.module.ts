import { NgModule } from '@angular/core';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PassengerDetailComponent } from './components/modal/passenger-detail/passenger-detail.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SeatmapComponent } from './components/seatmap/seatmap.component';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { PassengersTableComponent } from './components/passengers-table/passengers.table.component';
import { InflightpassengerDetailComponent } from './components/modal/in-flight-passenger-detail/in-flight-passenger-detail.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { NewPassengerComponent } from './components/modal/new-passenger/new-passenger.component';
import { YesNoPipe } from './pipes/yes-no.pipe';

import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PassengerDetailComponent,
    InflightpassengerDetailComponent,
    NewPassengerComponent,
    PassengerListComponent,
    HeaderComponent,
    FooterComponent,
    SeatmapComponent,
    PassengersTableComponent,
    ChipListComponent,
    YesNoPipe,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
  ],
  exports: [
    PassengerDetailComponent,
    PassengerListComponent,
    HeaderComponent,
    FooterComponent,
    SeatmapComponent,
    PassengersTableComponent,
    ChipListComponent,
    YesNoPipe,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    PassengerDetailComponent,
    InflightpassengerDetailComponent,
    NewPassengerComponent,
    SeatmapComponent,
    PassengersTableComponent,
    ChipListComponent,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, direction: 'ltr' },
    },
  ],
})
export class SharedModule {}
