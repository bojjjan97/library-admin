
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL, httpClient)

const CustomDataProvider = {
    ...dataProvider,
    create: async (resource, params) => {
        if(!params.data.file){
            return dataProvider.create(resource, params);
        }
        const documentBase64 = await Promise.resolve(convertFileToBase64(params.data.file));
        const transformedDocument = ({
            file: documentBase64,
            fileName: `${params.data.file.title}`,
        });
        return await dataProvider.create(resource, {
            ...params,
            data: {
                ...params.data,
                ...transformedDocument
            },
        });
    
    }
}




const convertFileToBase64 = file =>
 new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result.split (",").pop ());
     reader.onerror = reject;
     
     reader.readAsDataURL(file.rawFile);
 });

export default CustomDataProvider;