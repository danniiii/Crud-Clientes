import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { pencil, personAdd, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import '../Page.css';
import Employee from './Employee';
import { removeEmployee, searchEmployees } from './EmployeeApi';

const EmployeeList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [empleados, setEmpleados] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect( () => {
    search();
  },[history.location.pathname])

  const search = async () => {
    let result = await searchEmployees();
    setEmpleados(result);

  }

  const remove = (id:string) => {
    removeEmployee(id);
    search();

  }

  const addEmployee = () => {

    history.push('/page/employee/new')
  }

  const editEmployee = (id:string) => {

    history.push('/page/employee/' + id)
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
          <IonButton color='primary' fill='solid' slot='end' size='default' onClick={addEmployee} >
            <IonIcon icon={personAdd}/>&nbsp;Agregar Empleado
            </IonButton>
        </IonItem>
        <IonGrid className='table'>
          <IonRow>
            <IonCol>Nombre</IonCol>
            <IonCol>Email</IonCol>
            <IonCol>Telefono</IonCol>
            <IonCol>Salario</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>

          {empleados.map( (empleado:Employee) => 
            
            <IonRow>
              <IonCol>{empleado.firstname} {empleado.lastname}</IonCol>
              <IonCol>{empleado.email}</IonCol>
              <IonCol>{empleado.phone}</IonCol>
              <IonCol>{empleado.salary}</IonCol>
              <IonCol>
                <IonButton fill='solid' color='edit' onClick={() => editEmployee(String(empleado.id))}>
                  <IonIcon icon={pencil} slot='icon-only'/>
                </IonButton>
                <IonButton fill='solid' color='danger' onClick={() => remove(String(empleado.id))}>
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

export default EmployeeList;
