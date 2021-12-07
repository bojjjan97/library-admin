import * as React from "react";
import { List, Show, SimpleShowLayout, ReferenceArrayInput, AutocompleteArrayInput,ChipField, SelectArrayInput, ShowButton, Datagrid, Edit, Create, SimpleForm, DateField, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import { AddressCreate, AddressEdit, AddressShow } from "./Address";
import { FileUploadDownloadField } from "../atoms/FileUploadField";
import CustomImage from "../atoms/CustomImage";

const LibraryList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="name" sortable={false} />
            <EditButton basePath="/Library" />
            <ShowButton basePath="/Library" />
        </Datagrid>
    </List>
);

const LibraryTitle = ({ record }) => {
    return <span>Library {record ? `"${record.name}"` : ''}</span>;
};

const LibraryShow = (props) => {
    return (
        <Show {...props} title={<LibraryTitle />}>
            <SimpleShowLayout>
                <CustomImage/>
                <TextField source="name" />
                <TextField source="telephone" />
                <TextField source="email" />
                <AddressShow />
            </SimpleShowLayout>
        </Show>
    );
}

const LibraryEdit = (props) =>{
    return (
        <Edit {...props} title={<LibraryTitle/>}>
            <SimpleForm >
                <CustomImage/>
                <TextInput source="id" disabled/>
                <TextInput source="name" />
                <TextInput source="telephone" />
                <TextInput source="email" />
                <ReferenceArrayInput source="employeesIds" reference="User">
                    <AutocompleteArrayInput  optionText="userName" />
                </ReferenceArrayInput>
                <AddressEdit/>
            </SimpleForm>
        </Edit>
    );
}



const LibraryCreate = (props) =>{
    return (
        <Create {...props} title="Add new library">
            
            <SimpleForm >
                <TextInput source="name" required/>
                <TextInput source="telephone" required/>
                <TextInput source="email" required/>
                <ReferenceArrayInput source="employeesIds" reference="User">
                    <AutocompleteArrayInput  optionText="userName" />
                </ReferenceArrayInput>
                <FileUploadDownloadField />
                <AddressCreate />
            </SimpleForm>
        </Create>
    );
}
export { LibraryList, LibraryShow, LibraryEdit, LibraryCreate }