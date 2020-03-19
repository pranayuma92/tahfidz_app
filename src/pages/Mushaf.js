import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Mushaf = (props) => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="translucent">
          <IonButtons slot="start">
              <IonButton  onClick={() => props.history.goBack()}>
                <IonIcon slot="icon-only" icon={chevronBackOutline} />
              </IonButton>
          </IonButtons>
          <IonTitle>Mushaf</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={() => props.history.push('/test')}>Test</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Mushaf;
