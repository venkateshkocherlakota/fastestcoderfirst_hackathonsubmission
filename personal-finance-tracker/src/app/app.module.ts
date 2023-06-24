import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AddPaneComponent } from './components/actions-wrapper/add-pane/add-pane.component';
import { TxGridComponent } from './components/actions-wrapper/tx-grid/tx-grid.component';
import { TxEditModalComponent } from './components/actions-wrapper/tx-edit-modal/tx-edit-modal.component';
import { ActionsWrapperComponent } from './components/actions-wrapper/actions-wrapper.component';
import { BalanceAreaComponent } from './components/balance-area/balance-area.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    BalanceAreaComponent,
    ActionsWrapperComponent,
    AddPaneComponent,
    TxGridComponent,
    TxEditModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
