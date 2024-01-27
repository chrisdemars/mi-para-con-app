import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Vendors: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>MI ParaCon</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">MI ParaCon</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Vendors" />
      </IonContent>
    </IonPage>
  );
};

export default Vendors;
