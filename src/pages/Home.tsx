import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonList, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { calendar, time, cash, people } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard>
          <IonImg alt="Silhouette of mountains" src="../public/hero-image.webp" ></IonImg>
          <IonCardHeader>
            <IonCardTitle>👻 Welcome!</IonCardTitle>
            {/* <IonCardSubtitle>Michigan ParaCon</IonCardSubtitle> */}
          </IonCardHeader>
          <IonCardContent>The 2024 Michigan Paranormal Convention will bring the biggest names in the paranormal industry to Sault Ste. Marie, MI for the 14th time.</IonCardContent>
          <IonCardContent>
            Between August 22 and 24, 2024 in Sault Ste. Marie's Kewadin Casino's DreamMakers Theater, experts and television stars will be on hand to cover such topics as paranormal investigating, psychic powers, demonology, and UFOlogy. Come see the biggest names speak on today's hottest topic, the paranormal!
          </IonCardContent>
        </IonCard>
        <h1>👻 Special Events!</h1>
        <IonCard>
          <IonImg alt="Silhouette of mountains" src="../public/valley-camp.webp"></IonImg>
          <IonCardHeader>
            <IonCardTitle>VALLEY CAMP INVESTIGATION</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon aria-hidden="true" icon={calendar} slot="start"></IonIcon>
                <IonLabel>Date: Thursday, Aug. 22, 2024</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon aria-hidden="true" icon={time} slot="start"></IonIcon>
                <IonLabel>Time: 8 p.m. – Midnight</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon aria-hidden="true" icon={cash} slot="start"></IonIcon>
                <IonLabel>Price: $120.00 each</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon aria-hidden="true" icon={people} slot="start"></IonIcon>
                <IonLabel>Seating Capacity: 100</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
          <IonCardContent>
            We’re bringing back our ever popular Paranormal Investigation to the 106-year-old Museum Ship Valley Camp. Join paranormal celebs and experts on this investigation! This experience is limited to 100 people and the group will be broken into smaller investigation stations. Participants must provide their own transportation to the Valley Camp.</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>📋 Workshops!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>The 2024 Michigan Paranormal Convention will bring the biggest names in the paranormal industry to Sault Ste. Marie, MI for the 14th time.</IonCardContent>
          <IonCardContent>
            Between August 22 and 24, 2024 in Sault Ste. Marie's Kewadin Casino's DreamMakers Theater, experts and television stars will be on hand to cover such topics as paranormal investigating, psychic powers, demonology, and UFOlogy. Come see the biggest names speak on today's hottest topic, the paranormal!
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
