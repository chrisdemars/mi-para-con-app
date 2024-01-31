import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Speakers: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">MI ParaCon</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Speakers;
