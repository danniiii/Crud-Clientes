import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import '../Page.css';
import Supplier from './Supplier';
import { saveSupplier, searchSuppliersById } from './SupplierApi';

const SupplierEdit: React.FC = () => {

  const { name } = useParams<{ name: string;}>();
  const [supplier, setSupplier] = useState<Supplier>({});
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/page/supplier/:id");
  const id = routeMatch?.params?.id;

  useEffect( () => {
    search();
  },[history.location.pathname])

  const search = async () => {
    if (id === 'new') {
      setSupplier({});
    } else {
      let result = await searchSuppliersById(id);
      setSupplier(result);
    }
  }

  const save = async () =>{
      await saveSupplier(supplier);
      history.push('/page/suppliers');
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonCard>
        <IonTitle>{id === 'new' ? 'Agregar empleado' : 'Editar empleado'}</IonTitle>

        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={ e => supplier.firstname = String(e.detail.value)} value={supplier.firstname}></IonInput>
                </IonItem>
            </IonCol>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Apellido</IonLabel>
                    <IonInput onIonChange={ e => supplier.lastname = String(e.detail.value)} value={supplier.lastname}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput onIonChange={ e => supplier.email = String(e.detail.value)} value={supplier.email}></IonInput>
                </IonItem>
            </IonCol>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Número de teléfono</IonLabel>
                    <IonInput onIonChange={ e => supplier.phone = String(e.detail.value)} value={supplier.phone}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Dirección</IonLabel>
                    <IonInput onIonChange={ e => supplier.address = String(e.detail.value)} value={supplier.address}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Web</IonLabel>
                    <IonInput onIonChange={ e => supplier.web = String(e.detail.value)} value={supplier.web}></IonInput>
                </IonItem>
            </IonCol>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Contacto</IonLabel>
                    <IonInput onIonChange={ e => supplier.contact = String(e.detail.value)} value={supplier.contact}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
 

        <IonItem>
          <IonButton color='success' fill='solid' slot='end' size='default' onClick={save}>
            <IonIcon icon={checkmark}/>&nbsp;Guardar
            </IonButton>
        </IonItem>

      </IonCard>  


      </IonContent>
    </IonPage>
  );
};

export default SupplierEdit;
