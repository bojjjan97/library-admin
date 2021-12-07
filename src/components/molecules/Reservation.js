import * as React from "react";
import { List, Show, SimpleShowLayout,SimpleForm , ReferenceArrayInput,AutocompleteArrayInput,  ReferenceField,ReferenceInput,ReferenceArrayField, SingleFieldList,ChipField, ShowButton, Datagrid, Edit, Create,  TextField,  EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import { AddressCreate, AddressEdit, AddressShow } from "./Address";

const ReservationList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <ReferenceField label="User" source="userId" reference="User">
                <TextField source="userName" />
            </ReferenceField>
            <TextField source="status" sortable={false} />
            <EditButton basePath="/Reservation" />
            <ShowButton basePath="/Reservation" />
        </Datagrid>
    </List>
);

const ReservationTitle = ({ record }) => {
    return <span>Reservation {record ? `"${record.name}"` : ''}</span>;
};

const ReservationShow = (props) => {
    return (
        <Show {...props} title={<ReservationTitle />}>
            <SimpleShowLayout>
                <ReferenceField label="User" source="userId" reference="User">
                    <TextField source="userName" />
                </ReferenceField>
                <TextField source="status" />
                <ReferenceField label="Library" source="libraryId" reference="Library">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceArrayField source="materialCopiesIds" reference="MaterialCopy">
                    <SingleFieldList>
                        <ChipField source="uniqueCode" />
                    </SingleFieldList>
                </ReferenceArrayField>
            </SimpleShowLayout>
        </Show>
    );
}

const ReservationEdit = (props) =>{
    return (
        <Edit {...props} title={<ReservationTitle />}>
            <SimpleForm >
            <ReferenceField label="Username" source="userId" reference="User">
                    <TextField source="userName" />
                </ReferenceField>
                <TextInput source="status" />
                
            </SimpleForm>
        </Edit>
    );
}

const ReservationCreate = (props) =>{
    return (
        <Create {...props} title={<ReservationTitle />}>
           
        </Create>
    );
}
export { ReservationList, ReservationShow, ReservationEdit, ReservationCreate }