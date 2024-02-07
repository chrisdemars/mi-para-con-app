import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useEffect, useState } from 'react';

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState([]);

  const fetchSpeakers = async () => {
    const response = await fetch('http://localhost:1337/api/speakers?populate=*');
    const data = await response.json();
    setSpeakers(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    fetchSpeakers();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">MI ParaCon</IonTitle>
          </IonToolbar>
        </IonHeader>
        {Array.isArray(speakers) && speakers.map((speaker: any) => (
          <IonItem key={speaker.id}>
            <IonAvatar slot="start">
              <IonImg src={speaker.attributes.Headshot.data.attributes.url} alt={speaker.attributes.Headshot.data.attributes.alternativeText} />
            </IonAvatar>
            <IonLabel>{speaker.attributes.Name}</IonLabel>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Speakers;