import * as React from "react";
import { Show, SimpleShowLayout, Edit, Create, SimpleForm, TextField,TextInput} from 'react-admin';

const AddressShow = (props) => {
    return (
        <div style={{ display:"flex", flexDirection:"column"}}>
            <div>Address:</div>
            <TextField source="address.line1" label="Street"/>
            <TextField source="address.line2" label="Suite, Number" />
            <TextField source="address.city" label="City" />
            <TextField source="address.postalCode" label="Postal Code" />
            <TextField source="address.country" label="Country" />
        </div>
    );
}

const AddressEdit = (props) =>{
    return (
        <div style={{ display:"flex", flexDirection:"column", background:"powderblue"}}>
            <div >Address:</div>
            <TextInput source="address.line1" label="Street"/>
            <TextInput source="address.line2" label="Suite, Number" />
            <TextInput source="address.city" label="City" />
            <TextInput source="address.postalCode" label="Postal Code" />
            <TextInput source="address.country" label="Country" />
        </div>
    );
}

const AddressCreate = (props) =>{
    return (
        <div style={{ display:"flex", flexDirection:"column", background:"#EEEEEE"}}>
            <div>Address:</div>
            <TextInput source="address.line1" label="Street"/>
            <TextInput source="address.line2" label="Suite, Number" />
            <TextInput source="address.city" label="City" />
            <TextInput source="address.postalCode" label="Postal Code" />
            <TextInput source="address.country" label="Country" />
        </div>
    );
}


export { AddressShow, AddressEdit, AddressCreate }