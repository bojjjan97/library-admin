import { Grid } from "@material-ui/core";
import * as React from "react";
import { List, Show, SimpleShowLayout, ReferenceInput, SelectInput, AutocompleteInput, ShowButton, Datagrid, Edit, Create, SimpleForm, DateField, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';

const GenreList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="name" sortable={false} />
            <TextField source="description" sortable={false}  />
            <EditButton basePath="/Genre" />
            <ShowButton basePath="/Genre" />
        </Datagrid>
    </List>
);

const GenreTitle = ({ record }) => {
    return <span>Genre {record ? `"${record.name}"` : ''}</span>;
};

const GenreShow = (props) => {
    return (
        <Show {...props} title={<GenreTitle />}>
            <SimpleShowLayout>
                <TextField source="name" />
                <TextField source="description" />
            </SimpleShowLayout>
        </Show>
    );
}

const GenreEdit = (props) =>{
    return (
        <Edit {...props} title={<GenreTitle />}>
            <SimpleForm >
                <TextInput source="id" disabled/>
                <TextInput source="name" />
                <TextInput source="description" />
            </SimpleForm>
        </Edit>
    );
}

const GenreCreate = (props) =>{
    return (
        <Create {...props} title="Add new genre">
            <SimpleForm >
                <TextInput source="name" />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
}
export { GenreList, GenreShow, GenreEdit, GenreCreate }