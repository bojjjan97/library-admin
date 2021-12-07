import * as React from "react";
import { List, Show, SimpleShowLayout, ReferenceArrayInput,AutocompleteArrayInput, ArrayInput , ReferenceArrayField, SingleFieldList,ChipField, SimpleFormIterator, ShowButton, Datagrid, Edit, Create, SimpleForm, DateField, TextField, PasswordInput, EditButton, TextInput, required , email, minLength, regex} from 'react-admin';
import CustomImage from "../atoms/CustomImage";
import { FileUploadDownloadField } from "../atoms/FileUploadField";

const MaterialList = ({permissions, ...props}) => (
    <List {...props} pagination={false} bulkActionButtons={false} >
        <Datagrid>
            <TextField source="title" sortable={false} />
            <TextField source="isbn" sortable={false}  />
            <EditButton basePath="/Material" />
            <ShowButton basePath="/Material" />
        </Datagrid>
    </List>
);

const MaterialTitle = ({ record }) => {
    return <span>Material {record ? `"${record.title}"` : ''}</span>;
};

const MaterialShow = (props) => {
    return (
        <Show {...props} title={<MaterialTitle />}>
            <SimpleShowLayout>
                <CustomImage/>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="description" />
                <TextField source="pageNumber" />
                <ReferenceArrayField source="categoriesIds" reference="Category">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <ReferenceArrayField source="genresIds" reference="Genre">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <ReferenceArrayField source="authorsIds" reference="Author">
                    <SingleFieldList>
                        <ChipField source="firstname"/>
                    </SingleFieldList>
                </ReferenceArrayField>
                <ReferenceArrayField source="publisersIds" reference="Publisher">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <ReferenceArrayField source="materialCopiesIds" reference="MaterialCopy">
                    <SingleFieldList>
                        <ChipField source="uniqueCode"/>
                    </SingleFieldList>
                </ReferenceArrayField>
            </SimpleShowLayout>
        </Show>
    );
}

const MaterialEdit = (props) =>{
    return (
        <Edit {...props} title={<MaterialTitle />}>
            <SimpleForm >
                <CustomImage/>
                <TextInput source="id" disabled/>
                <TextInput source="title" />
                <TextInput source="description" />
                <TextInput source="isbn" />
                <TextInput source="pageNumber" />
                <ReferenceArrayInput source="categoriesIds" reference="Category">
                    <AutocompleteArrayInput  optionText="name" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="genresIds" reference="Genre">
                    <AutocompleteArrayInput  optionText="name" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="authorsIds" reference="Author">
                    <AutocompleteArrayInput  optionText="firstname" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    );
}

const MaterialCreate = (props) =>{
    return (
        <Create {...props} title="Add new material">
            <SimpleForm >
                <TextInput source="title" />
                <TextInput source="description" />
                <TextInput source="isbn" />
                <TextInput source="pageNumber" />
                <ReferenceArrayInput source="categoriesIds" reference="Category">
                    <AutocompleteArrayInput  optionText="name" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="genresIds" reference="Genre">
                    <AutocompleteArrayInput  optionText="name" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="authorsIds" reference="Author">
                    <AutocompleteArrayInput  optionText="firstname" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="publisersIds" reference="Publisher">
                    <AutocompleteArrayInput  optionText="name" />
                </ReferenceArrayInput>
                <ArrayInput source="materialsCopiesCode">
                    <SimpleFormIterator>
                        <TextInput />
                    </SimpleFormIterator>
                </ArrayInput >
                <FileUploadDownloadField />
            </SimpleForm>
        </Create>
    );
}
export { MaterialList, MaterialShow, MaterialEdit, MaterialCreate }