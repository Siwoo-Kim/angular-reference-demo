import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from "./service/hero.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./service/message.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentComponent } from './component/component.component';
import { EmitterComponent } from './component/emitter/emitter.component';
import { TwoWayComponent } from './component/two-way/two-way.component';
import { NgmodelComponent } from './component/ngmodel/ngmodel.component';
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive.component';
import { TemplateVariableComponent } from './component/template-variable/template-variable.component';
import { InputOutputComponent } from './component/input-output/input-output.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { SpyDirective } from './life-cycle/spy.directive';
import { OnChangesComponent } from './life-cycle/on-changes/on-changes.component';
import { ChildComponent } from './life-cycle/child/child.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { HeroChildComponent } from './component-interaction/hero-child/hero-child.component';
import { NameChildComponent } from './component-interaction/name-child/name-child.component';
import { VersionChildComponent } from './component-interaction/version-child/version-child.component';
import { VoterComponent } from './component-interaction/voter/voter.component';
import { CountdownTimerComponent } from './component-interaction/countdown-timer/countdown-timer.component';
import { MissionControlComponent } from './component-interaction/mission-control/mission-control.component';
import { FormsComponent } from './forms/forms.component';
import { KeyupComponent } from './forms/keyup/keyup.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule } from '@angular/material';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HeroFormComponent } from './template-form/hero-form/hero-form.component'


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ComponentComponent,
    EmitterComponent,
    TwoWayComponent,
    NgmodelComponent,
    StructuralDirectiveComponent,
    TemplateVariableComponent,
    InputOutputComponent,
    LifeCycleComponent,
    SpyDirective,
    OnChangesComponent,
    ChildComponent,
    ComponentInteractionComponent,
    HeroChildComponent,
    NameChildComponent,
    VersionChildComponent,
    VoterComponent,
    CountdownTimerComponent,
    MissionControlComponent,
    FormsComponent,
    KeyupComponent,
    TemplateFormComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [
    HeroService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
