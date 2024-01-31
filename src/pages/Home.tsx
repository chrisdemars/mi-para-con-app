import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <IonHeader>
          <IonToolbar>
            <IonTitle size="large">MI ParaCon</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonCard>
          <img alt="Silhouette of mountains" src="../public/hero-image.webp" />
          <IonCardHeader>
            <IonCardTitle>👻 Welcome!</IonCardTitle>
            {/* <IonCardSubtitle>Michigan ParaCon</IonCardSubtitle> */}
          </IonCardHeader>
          <IonCardContent>The 2024 Michigan Paranormal Convention will bring the biggest names in the paranormal industry to Sault Ste. Marie, MI for the 14th time.</IonCardContent>
          <IonCardContent>Between August 22 and 24, 2024 in Sault Ste. Marie's Kewadin Casino's DreamMakers Theater, experts and television stars will be on hand to cover such topics as paranormal investigating, psychic powers, demonology, and UFOlogy. Come see the biggest names speak on today's hottest topic, the paranormal!</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
