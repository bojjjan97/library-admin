import * as React from "react";
import { List, Show, SimpleShowLayout, FileInput, ImageField, AutocompleteInput, ShowButton, Datagrid, Edit, Create, SimpleForm, DateField, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import CustomImage from "../atoms/CustomImage";
import { FileUploadDownloadField } from "../atoms/FileUploadField";

const AuthorList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="firstname" sortable={false} />
            <TextField source="lastname" sortable={false}  />
            <EditButton basePath="/Author" />
            <ShowButton basePath="/Author" />
        </Datagrid>
    </List>
);

const AuthorTitle = ({ record }) => {
    return <span>Author {record ? `"${record.firstname}"` : ''}</span>;
};

const AuthorShow = (props) => {
    console.log(props)
    return (
        <Show {...props} title={<AuthorTitle />}>
            <SimpleShowLayout>
                <CustomImage/>
                <TextField source="firstname" />
                <TextField source="lastname" />
                <TextField source="biography" style={{width: "100%"}} />
            </SimpleShowLayout>
        </Show>
    );
}

const AuthorEdit = (props) =>{
    return (
        <Edit {...props} title={<AuthorTitle />}>
            <SimpleForm >
                <CustomImage/>
                <TextInput source="id" disabled/>
                <TextInput source="firstname" />
                <TextInput source="lastname" />
                <TextInput 
                
                multiline={true}
                onChange={(event) => {
                  this.setState({
                    text: event.nativeEvent.text,
                    height: event.nativeEvent.contentSize.height,
                  });
                }}
                source="biography" style={{width: "100%"}} />
            </SimpleForm>
        </Edit>
    );
}

const AuthorCreate = (props) =>{
    return (
        <Create {...props} title="Add new author">
            <SimpleForm >
                <TextInput source="firstname" />
                <TextInput source="lastname" />
                <TextInput source="biography" />
                <FileUploadDownloadField />
            </SimpleForm>
        </Create>
    );
}

export { AuthorList, AuthorShow, AuthorEdit, AuthorCreate }