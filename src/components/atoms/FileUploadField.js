import { Button } from "@material-ui/core";
import * as React from "react";
import { useRecordContext, FileInput,FileField, usePermissions   } from 'react-admin';
import useStyles from '../../css/FileUploadFieldStyles'
import CloudDownload from '@material-ui/icons/CloudDownload';
import CloudUpload from '@material-ui/icons/CloudUpload';

const FileUploadInputField = (props) => {
    return (
        <FileInput label="Document" name="file"   >
            <FileField source="file" title="title" />
        </FileInput>
    )
}

const FileDownloadButton = (props) => {
    const { permissions } = usePermissions();
    const classes = useStyles()
    const record = useRecordContext();
    const downloadUrl = process.env.REACT_APP_API_URL + "/Document/" + record.id + "/download"
    const authHeader = "Bearer " + JSON.parse(localStorage.getItem("auth")).token

    if(!record.fileName) return <div/>;

    if(permissions === "Client") return (
        <Button {...props} variant="contained" className={classes.downloadButtonDisabled} endIcon={<CloudDownload className={classes.downloadButtonIcon}/>}>Download Restricted</Button>
    )

    const onDownloadClick = () => {
        const options = {
            headers: {
            Authorization: authHeader
            }
        };

       fetch(downloadUrl, options)
        .then( res => res.blob() )
        .then( blob => {
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                record.fileName,
            );

            document.body.appendChild(link);

            link.click();

            link.parentNode.removeChild(link);
        });
    }

    return (
        <Button {...props} variant="contained" className={classes.downloadButton} onClick={onDownloadClick} endIcon={<CloudDownload className={classes.downloadButtonIcon}/>}>Download Document</Button>
    )
}

const FileUploadButton = (props) => {
    const classes = useStyles()
    const record = useRecordContext();
    const uploadUrl = "#/Document/" + record.id
    return (
        <Button {...props} href={uploadUrl} variant="contained" className={classes.uploadButton} endIcon={<CloudUpload className={classes.downloadButtonIcon}/>}>Upload</Button> 
    )
}

const FileUploadDownloadField = (props) => {
    const record = useRecordContext();

    if(record && record.fileName){
        return ( <FileDownloadButton/> )
    }else{
        return ( <FileUploadInputField/> )
    }
}

const FileDownloadUploadButton = (props) => {
    const record = useRecordContext();

    if(record && record.fileName){
        return ( <FileDownloadButton {...props}/> )
    }else{
        return ( <FileUploadButton {...props}/> )
    }
}

export {FileUploadDownloadField, FileDownloadButton, FileDownloadUploadButton}