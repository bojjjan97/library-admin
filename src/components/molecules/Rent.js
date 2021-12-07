import * as React from "react";
import {List, Show, SimpleShowLayout, DateField , ReferenceInput,AutocompleteInput, ReferenceField,ReferenceArrayInput,AutocompleteArrayInput, ArrayInput , ReferenceArrayField, SingleFieldList,ChipField, SimpleFormIterator, ShowButton, Datagrid, Edit, Create, SimpleForm, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import { Button } from "ra-ui-materialui";
import { CheckInRent } from "../../utils/ApiHelper";
const RentList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="user.userName" sortable={false}  label="UserName"/>
            <DateField source="startDate" sortable={false}  />
            <DateField source="returnDate" sortable={false}  />
            <EditButton basePath="/Rent" />
            <ShowButton basePath="/Rent" />
        </Datagrid>
    </List>
);

const RentTitle = ({ record }) => {
    return <span>Material {record ? `"${record.title}"` : ''}</span>;
};

const RentShow = (props) => {
    return (
        <Show {...props} title={<RentTitle />}>
            <SimpleShowLayout>
                <ReferenceField source="userId" reference="User">
                    <TextField source="firstName"/>
                </ReferenceField>
                <ReferenceArrayField source="materialCopiesIds" reference="MaterialCopy">
                    <Datagrid>
                        <TextField source="uniqueCode"/>
                        <TextField source="material.title"/>
                        <ShowButton/>
                    </Datagrid>
                </ReferenceArrayField>
                <Button label="Check In" onClick={ () => {CheckInRent(props.id)}}/>
            </SimpleShowLayout>
        </Show>
    );
}

const RentEdit = (props) =>{
    return (
        <Edit {...props} title={<RentTitle />}>
            <SimpleForm >
                <ReferenceInput source="userId" reference="User" validate={required()}>
                    <AutocompleteInput  optionText="userName" />
                </ReferenceInput>
                <ReferenceInput source="libraryId" reference="Library"  validate={required()}>
                    <AutocompleteInput  optionText="name" />
                </ReferenceInput>
                <ReferenceArrayInput source="materialCopiesIds" reference="MaterialCopy">
                    <AutocompleteArrayInput  optionText="uniqueCode" />
                </ReferenceArrayInput >
                <ReferenceArrayInput source="reservationId" reference="Reservation">
                    <AutocompleteArrayInput  optionText="id" />
                </ReferenceArrayInput >
            </SimpleForm>
        </Edit>
    );
}

const RentCreate = (props) =>{
    return (
        <Create {...props} title="Add new rent">
            <SimpleForm >
                <ReferenceInput source="userId" reference="User" validate={required()}>
                    <AutocompleteInput  optionText="userName" />
                </ReferenceInput>
                <ReferenceInput source="libraryId" reference="Library"  validate={required()}>
                    <AutocompleteInput  optionText="name" />
                </ReferenceInput>
                <ReferenceArrayInput source="materialCopiesIds" reference="MaterialCopy">
                    <AutocompleteArrayInput  optionText="uniqueCode" />
                </ReferenceArrayInput >
                <ReferenceInput source="reservationId" reference="Reservation" allowEmpty>
                    <AutocompleteInput  optionText="id" />
                </ReferenceInput >
            </SimpleForm>
        </Create>
    );
}
export { RentList, RentShow, RentEdit,RentCreate }