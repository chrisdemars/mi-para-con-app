import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeSharp, calendarSharp, peopleSharp, pricetagsSharp } from 'ionicons/icons';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Speakers from './pages/Guests';
import Vendors from './pages/Vendors';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route path="/guests">
            <Speakers />
          </Route>
          <Route path="/vendors">
            <Vendors />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/schedule">
            <IonIcon aria-hidden="true" icon={calendarSharp} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
          <IonTabButton tab="guests" href="/guests">
            <IonIcon aria-hidden="true" icon={peopleSharp} />
            <IonLabel>Guests</IonLabel>
          </IonTabButton>
          <IonTabButton tab="vendors" href="/vendors">
            <IonIcon aria-hidden="true" icon={pricetagsSharp} />
            <IonLabel>Vendors</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
