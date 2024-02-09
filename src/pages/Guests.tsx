import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useEffect, useState } from 'react';

const Guests: React.FC = () => {
  const [guests, setGuests] = useState([]);

  const fetchGuests = async () => {
    const response = await fetch('http://localhost:1337/api/speakers?populate=*');
    const data = await response.json();
    setGuests(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen={true} scrollEvents={true}>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">MI ParaCon</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {Array.isArray(guests) && guests.map((speaker: any) => (
            <IonItem key={speaker.id}>
              <IonAvatar slot="start">
                <IonImg src={`http://localhost:1337${speaker.attributes.Headshot?.data?.attributes?.url}`}
                  alt={speaker.attributes.Headshot.data.attributes.alternativeText} />
              </IonAvatar>
              <IonLabel>{speaker.attributes.Name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Guests;