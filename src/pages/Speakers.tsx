import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Speakers: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">MI ParaCon</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img alt="Silhouette of a person's head" src="/speakers/Amy-Bruni.webp" />
          </IonAvatar>
          <IonLabel>Amy Bruni
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Speakers;
