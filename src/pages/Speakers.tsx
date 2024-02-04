import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useEffect, useState } from 'react';

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    const getData = fetch('http://localhost:1337/api/speakers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSpeakers(data);
        console.log(data);
      });

    getData;
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
              <IonImg key={speaker.id} src={speaker.url} alt={speaker.title} />
            </IonAvatar>
            <IonLabel>{speaker.name}</IonLabel>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Speakers;
