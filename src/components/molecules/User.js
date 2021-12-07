import * as React from "react";
import { List, Show, SimpleShowLayout, ReferenceInput, ReferenceField, AutocompleteInput, ShowButton, Datagrid, Edit, Create, SimpleForm, SelectInput, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import { AddressCreate, AddressEdit, AddressShow } from "./Address";

const UserList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="userName" sortable={false} />
            <TextField source="email" sortable={false} />
            <TextField source="firstName" sortable={false} />
            <TextField source="lastName" sortable={false}  />
            <TextField source="role" sortable={false}  />
            <ReferenceField source="libraryId" reference="Library">
                <TextField source="name" />
            </ReferenceField>
            <EditButton basePath="/User" />
            <ShowButton basePath="/User" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.userName}"` : ''}</span>;
};

const UserShow = (props) => {
    return (
        <Show {...props} title={<UserTitle />}>
            <SimpleShowLayout>
                <TextField source="id" sortable={false} />
                <TextField source="userName" sortable={false} />
                <TextField source="email" sortable={false} />
                <TextField source="firstName" sortable={false} />
                <TextField source="lastName" sortable={false}  />
                <TextField source="phoneNunber" sortable={false}  />
                <TextField source="role" sortable={false}  />
                <ReferenceField source="libraryId" reference="Library" label="Employed at library:">
                    <TextField source="name" />
                </ReferenceField>
                <AddressShow />
            </SimpleShowLayout>
        </Show>
    );
}

const UserEdit = (props) =>{
    return (
        <Edit {...props} title={<UserTitle />}>
            <SimpleForm >
                <TextInput source="id" disabled />
                <TextInput source="userName" validate={required()}   />
                <TextInput source="email" validate={email()} />
                <TextInput source="firstName" />
                <TextInput source="lastName"  />
                <TextInput source="phoneNumber" />
                <SelectInput source="role" choices={
                    [ { id: "Administrator",  name : "Admnisitrator"  },
                      { id: "Librarian",  name : "Librarian"  },
                      { id: "User",  name : "User"  },
                ]
                   
                }/>
                <ReferenceInput source="libraryId" reference="Library">
                    <AutocompleteInput source="name" />
                </ReferenceInput>
                <AddressEdit/>
            </SimpleForm>
        </Edit>
    );
}

const UserCreate = (props) =>{
    return (
        <Create {...props} title={<UserTitle />}>
            <SimpleForm >
                <TextInput source="userName" />
                <TextInput source="email"/>
                <TextInput source="firstName" />
                <TextInput source="lastName"  />
                <TextInput source="phoneNunber" />
                <PasswordInput source="password"/>
                <SelectInput source="role" choices={
                    [ { id: "Administrator",  name : "Admnisitrator"  },
                      { id: "Librarian",  name : "Librarian"  },
                      { id: "User",  name : "User"  },
                ]
                   
                }/>
                <ReferenceInput source="libraryId" reference="Library">
                    <AutocompleteInput source="name" />
                </ReferenceInput>
                <AddressCreate />
            </SimpleForm>
        </Create>
    );
}

export { UserList, UserShow, UserEdit, UserCreate }