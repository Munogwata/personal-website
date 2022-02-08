import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LogoComponent } from './reusable-components/navigation/logo/logo.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationBarComponent } from './reuseable-components/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MunoImageComponent } from './reusable-home-componets/muno-image/muno-image.component';
import { TagsComponent } from './reusable-home-componets/tags/tags.component';
import { HeroComponent } from './reusable-home-componets/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './reusable-home-componets/contact-form/contact-form.component';
import { ProjectOneComponent } from './projects/project-one/project-one.component';
import { NavigationLinksComponent } from './reusable-home-componets/navigation-links/navigation-links.component';
import { ProjectTwoComponent } from './projects/project-two/project-two.component';
import { ProjectThreeComponent } from './projects/project-three/project-three.component';
import { SmallProjectCardsComponent } from './reusable-home-componets/small-project-cards/small-project-cards.component';
import { ToolboxComponent } from './reusable-home-componets/toolbox/toolbox.component';
import { HeroAboutComponent } from './reusable-components-about/hero-about/hero-about.component';
import { AboutMunoImageComponent } from './reusable-components-about/about-muno-image/about-muno-image.component';
import { AboutBocComponent } from './reusable-components-about/about-boc/about-boc.component';
import { MediaFeaturesComponent } from './reusable-components-about/media-features/media-features.component';
import { SandboxComponent } from './reusable-components-about/sandbox/sandbox.component';
import { PublicOpinonComponent } from './public-opinon/public-opinon.component';
import { MediaComponent } from './media/media.component';
import { WavyComponent } from './projects/wavy/wavy.component';
import { ScoreComponent } from './projects/score/score.component';
import { AstuteComponent } from './projects/astute/astute.component';
import { MeComponent } from './projects/me/me.component';
import { IntroductionComponent } from './projects/content-wavy/introduction/introduction.component';
import { ProblemStatementComponent } from './projects/content-wavy/problem-statement/problem-statement.component';
import { ObjectivesWavyComponent } from './projects/content-wavy/objectives-wavy/objectives-wavy.component';
import { ImpactComponent } from './projects/content-wavy/impact/impact.component';
import { WavyOpportunityComponent } from './projects/content-wavy/wavy-opportunity/wavy-opportunity.component';
import { MarketComparsionComponent } from './projects/content-wavy/market-comparsion/market-comparsion.component';
import { UserResearchComponent } from './projects/content-wavy/user-research/user-research.component';
import { UserBasedGoalsComponent } from './projects/content-wavy/user-based-goals/user-based-goals.component';
import { MainFindingsComponent } from './projects/content-wavy/main-findings/main-findings.component';
import { ScopesConstraintsComponent } from './projects/content-wavy/scopes-constraints/scopes-constraints.component';
import { DesignPrinciplesComponent } from './projects/content-wavy/design-principles/design-principles.component';
import { OpportunityComponent } from './projects/content-wavy/opportunity/opportunity.component';
import { ConclusionComponent } from './projects/content-wavy/conclusion/conclusion.component';
import { DesignReqComponent } from './projects/content-wavy/design-req/design-req.component';
import { DesignProcComponent } from './projects/content-wavy/design-proc/design-proc.component';
import { DesignDocumentsComponent } from './projects/content-wavy/design-documents/design-documents.component';
import { WavyPrototypeComponent } from './projects/content-wavy/wavy-prototype/wavy-prototype.component';
import { ScoreIntroComponent } from './projects/score-content/score-intro/score-intro.component';
import { ScoreObjectivesComponent } from './projects/score-content/score-objectives/score-objectives.component';
import { ScoreMarketComponent } from './projects/score-content/score-market/score-market.component';
import { ScoreResearchComponent } from './projects/score-content/score-research/score-research.component';
import { ScoreScopesComponent } from './projects/score-content/score-scopes/score-scopes.component';
import { ScoreOutcomesComponent } from './projects/score-content/score-outcomes/score-outcomes.component';
import { ScoreMainComponent } from './projects/score-content/score-main/score-main.component';
import { ScorePrinciplesComponent } from './projects/score-content/score-principles/score-principles.component';
import { ScoreRequirementsComponent } from './projects/score-content/score-requirements/score-requirements.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    AboutComponent,
    NavigationBarComponent,
    MunoImageComponent,
    TagsComponent,
    HeroComponent,
    ContactComponent,
    ContactFormComponent,
    ProjectOneComponent,
    NavigationLinksComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    SmallProjectCardsComponent,
    ToolboxComponent,
    HeroAboutComponent,
    AboutMunoImageComponent,
    AboutBocComponent,
    MediaFeaturesComponent,
    SandboxComponent,
    PublicOpinonComponent,
    MediaComponent,
    WavyComponent,
    ScoreComponent,
    AstuteComponent,
    MeComponent,
    IntroductionComponent,
    ProblemStatementComponent,
    ObjectivesWavyComponent,
    ImpactComponent,
    WavyOpportunityComponent,
    MarketComparsionComponent,
    UserResearchComponent,
    UserBasedGoalsComponent,
    MainFindingsComponent,
    ScopesConstraintsComponent,
    DesignPrinciplesComponent,
    OpportunityComponent,
    ConclusionComponent,
    DesignReqComponent,
    DesignProcComponent,
    DesignDocumentsComponent,
    WavyPrototypeComponent,
    ScoreIntroComponent,
    ScoreObjectivesComponent,
    ScoreMarketComponent,
    ScoreResearchComponent,
    ScoreScopesComponent,
    ScoreOutcomesComponent,
    ScoreMainComponent,
    ScorePrinciplesComponent,
    ScoreRequirementsComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
