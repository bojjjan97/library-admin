import * as React from "react";
import { List, Show, SimpleShowLayout, ReferenceField, ReferenceInput, AutocompleteInput, ShowButton, Datagrid, Edit, Create, SimpleForm, DateField, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import CustomImage from "../atoms/CustomImage";
import { FileUploadDownloadField } from "../atoms/FileUploadField";

const MaterialCopyList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="uniqueCode" sortable={false} />
            <TextField source="material.title" label="Material Title"/>
            <ReferenceField source="libraryId" reference="Library">
                <TextField source="name" />
            </ReferenceField >
            <EditButton basePath="/MaterialCopy" />
            <ShowButton basePath="/MaterialCopy" />
        </Datagrid>
    </List>
);

const MaterialCopyTitle = ({ record }) => {
    return <span>MaterialCopy {record ? `"${record.firstname}"` : ''}</span>;
};

const MaterialCopyShow = (props) => {
    console.log(props)
    return (
        <Show {...props} title={<MaterialCopyTitle />}>
            <SimpleShowLayout>
                <CustomImage/>
                <TextField source="uniqueCode" sortable={false} />
                <TextField source="material.title" label="Material Title"/>
                <ReferenceField source="libraryId" reference="Library">
                        <TextField source="name" />
            </ReferenceField >
            </SimpleShowLayout>
        </Show>
    );
}

const MaterialCopyEdit = (props) =>{
    return (
        <Edit {...props} title={<MaterialCopyTitle />}>
            <SimpleForm >
            <TextInput source="uniqueCode" sortable={false} />
                <ReferenceInput source="materialId" reference="Material">
                    <AutocompleteInput  optionText="title" />
                </ReferenceInput >
                <ReferenceInput source="libraryId" reference="Library" >
                    <AutocompleteInput  optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}

const MaterialCopyCreate = (props) =>{
    return (
        <Create {...props} title="Add new material copy">
            <SimpleForm >
                <TextInput source="uniqueCode" sortable={false} />
                <ReferenceInput source="materialId" reference="Material">
                    <AutocompleteInput  optionText="title" />
                </ReferenceInput >
                <ReferenceInput source="libraryId" reference="Library">
                    <AutocompleteInput  optionText="name" />
                </ReferenceInput >
            </SimpleForm>
        </Create>
    );
}

export { MaterialCopyList, MaterialCopyShow, MaterialCopyEdit, MaterialCopyCreate }