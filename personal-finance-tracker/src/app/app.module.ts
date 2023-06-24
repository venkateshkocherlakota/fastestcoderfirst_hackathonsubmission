import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/titlebar/title-bar/title-bar.component';
import { BalanceAreaComponent } from './components/balance/balance-area/balance-area.component';
import { ActionsWrapperComponent } from './components/actions-wrapper/actions-wrapper.component';
import { AddPaneComponent } from './components/actions-wrapper/add-pane/add-pane.component';
import { TxGridComponent } from './components/actions-wrapper/tx-grid/tx-grid.component';
import { TxEditModalComponent } from './components/actions-wrapper/tx-edit-modal/tx-edit-modal.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
