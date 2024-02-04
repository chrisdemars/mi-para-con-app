import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useEffect, useState } from 'react';

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1337/api/speakers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSpeakers(data);
      });
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
              <img key={speaker.id} src={speaker.url} alt={speaker.title} />
            </IonAvatar>
            <IonLabel>{speaker.Name}</IonLabel>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Speakers;
