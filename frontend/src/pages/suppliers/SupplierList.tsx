import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { pencil, personAdd, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import '../Page.css';
import Supplier from './Supplier';
import { removeSupplier, searchSuppliers } from './SupplierApi';

const SupplierList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [proveedores, setProveedores] = useState<Supplier[]>([]);
  const history = useHistory();

  useEffect( () => {
    search();
  },[history.location.pathname])

  const search = async () => {
    let result = await searchSuppliers();
    setProveedores(result);

  }

  const remove = async (id:string) => {
    await removeSupplier(id);
    search();

  }

  const addSupplier = () => {

    history.push('/page/supplier/new')
  }

  const editSupplier = (id:string) => {

    history.push('/page/supplier/' + id)
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
        <IonTitle>Gestión de Empleados</IonTitle>
        <IonItem>
          <IonButton color='primary' fill='solid' slot='end' size='default' onClick={addSupplier} >
            <IonIcon icon={personAdd}/>&nbsp;Agregar Empleado
            </IonButton>
        </IonItem>
        <IonGrid className='table'>
          <IonRow>
            <IonCol>Nombre</IonCol>
            <IonCol>Email</IonCol>
            <IonCol>Telefono</IonCol>
            <IonCol>Web</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>

          {proveedores.map( (proveedor:Supplier) => 
            
            <IonRow>
              <IonCol>{proveedor.firstname} {proveedor.lastname}</IonCol>
              <IonCol>{proveedor.email}</IonCol>
              <IonCol>{proveedor.phone}</IonCol>
              <IonCol>{proveedor.web}</IonCol>
              <IonCol>
                <IonButton fill='solid' color='edit' onClick={() => editSupplier(String(proveedor.id))}>
                  <IonIcon icon={pencil} slot='icon-only'/>
                </IonButton>
                <IonButton fill='solid' color='danger' onClick={() => remove(String(proveedor.id))}>
                <IonIcon icon={trash} slot='icon-only'/>
                </IonButton>  
              </IonCol>
            </IonRow>

          )}

        </IonGrid>
      
      </IonCard>  


      </IonContent>
    </IonPage>
  );
};

export default SupplierList;
