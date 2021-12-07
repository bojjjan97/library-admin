import { Grid } from "@material-ui/core";
import * as React from "react";
import { List, Show, SimpleShowLayout, ReferenceInput, SelectInput, AutocompleteInput, ShowButton, Datagrid, Edit, Create, SimpleForm, DateField, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';

const CategoryList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="name" sortable={false} />
            <TextField source="description" sortable={false}  />
            <EditButton basePath="/Category" />
            <ShowButton basePath="/Category" />
        </Datagrid>
    </List>
);

const CategoryTitle = ({ record }) => {
    return <span>Category {record ? `"${record.firstname}"` : ''}</span>;
};

const CategoryShow = (props) => {
    return (
        <Show {...props} title={<CategoryTitle />}>
            <SimpleShowLayout>
                <TextField source="name" />
                <TextField source="description" />
            </SimpleShowLayout>
        </Show>
    );
}

const CategoryEdit = (props) =>{
    return (
        <Edit {...props} title={<CategoryTitle />}>
            <SimpleForm >
                <TextInput source="id" disabled/>
                <TextInput source="name" />
                <TextInput source="description" />
            </SimpleForm>
        </Edit>
    );
}

const CategoryCreate = (props) =>{
    return (
        <Create {...props} title="Add new category">
            <SimpleForm >
                <TextInput source="name" />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
}
export { CategoryList, CategoryShow, CategoryEdit, CategoryCreate }