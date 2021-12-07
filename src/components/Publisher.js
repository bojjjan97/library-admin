import * as React from "react";
import { List, Show, SimpleShowLayout, ReferenceInput, SelectInput, AutocompleteInput, ShowButton, Datagrid, Edit, Create, SimpleForm, DateField, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import { AddressCreate, AddressEdit, AddressShow } from "./molecules/Address";

const PublisherList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="name" sortable={false} />
            <TextField source="description" sortable={false}  />
            <EditButton basePath="/Publisher" />
            <ShowButton basePath="/Publisher" />
        </Datagrid>
    </List>
);

const PublisherTitle = ({ record }) => {
    return <span>Publisher {record ? `"${record.name}"` : ''}</span>;
};

const PublisherShow = (props) => {
    return (
        <Show {...props} title={<PublisherTitle />}>
            <SimpleShowLayout>
                <TextField source="name" />
                <TextField source="description" />
                <AddressShow></AddressShow>
            </SimpleShowLayout>
        </Show>
    );
}

const PublisherEdit = (props) =>{
    return (
        <Edit {...props} title={<PublisherTitle />}>
            <SimpleForm >
                <TextInput source="id" disabled/>
                <TextInput source="name" />
                <TextInput source="description" />
                <AddressEdit></AddressEdit>
            </SimpleForm>
        </Edit>
    );
}

const PublisherCreate = (props) =>{
    return (
        <Create {...props} title="Add new publisher">
            <SimpleForm >
                <TextInput source="name" />
                <TextInput source="description" />
                <AddressCreate> </AddressCreate>
            </SimpleForm>
        </Create>
    );
}

export { PublisherList, PublisherShow, PublisherEdit, PublisherCreate }