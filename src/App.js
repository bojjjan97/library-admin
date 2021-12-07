import * as React from "react";
import { Admin, Resource } from 'react-admin';
import authProvider from './auth/AuthProvider';
import AuthorIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import UserIcon from '@material-ui/icons/SupervisedUserCircleTwoTone';
import MaterialIcon from '@material-ui/icons/LibraryBooksOutlined';
import PublisherIcon from '@material-ui/icons/Publish';
import GenreIcon from '@material-ui/icons/LibraryAddCheckOutlined';
import ReservationIcon from '@material-ui/icons/ListSharp';
import CustomDataProvider from "./data/CustomDataProvider";
/*
import Dashboard from "./components/molecules/Dashboard";*/
import { AuthorCreate, AuthorEdit, AuthorList, AuthorShow } from './components/molecules/Author';
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./components/molecules/Category";
import { LibraryList, LibraryShow, LibraryEdit, LibraryCreate } from "./components/molecules/Library";
import {AddressCreate,AddressShow, AddressEdit } from "./components/molecules/Address";
import { UserCreate, UserEdit, UserList, UserShow } from "./components/molecules/User";
import { MaterialCreate, MaterialEdit, MaterialList, MaterialShow } from "./components/molecules/Material";
import { RentCreate, RentEdit, RentList, RentShow } from "./components/molecules/Rent";
import { PublisherCreate, PublisherEdit, PublisherList, PublisherShow } from "./components/Publisher";
import { GenreCreate, GenreEdit, GenreList, GenreShow } from "./components/molecules/Genre";
import { ReservationEdit, ReservationList, ReservationShow } from "./components/molecules/Reservation";
import { MaterialCopyCreate, MaterialCopyEdit, MaterialCopyList, MaterialCopyShow } from "./components/molecules/MaterialCopy";

const App = () => {

  return (
    <Admin 
      title="Massive Dynamic" 
      /*dashboard={Dashboard}*/
      authProvider={authProvider} 
      dataProvider={CustomDataProvider} 
      >
        <Resource name="Author" list={AuthorList} show={AuthorShow} edit={AuthorEdit} create={AuthorCreate} icon={AuthorIcon} />
        <Resource name="Category" list={CategoryList} show={CategoryShow} edit={CategoryEdit} create={CategoryCreate} icon={CategoryIcon} />
        <Resource name="Library" list={LibraryList} show={LibraryShow} edit={LibraryEdit} create={LibraryCreate} icon={LibraryBooksIcon} />
        <Resource name="Address" show={AddressShow} edit={AddressEdit} create={AddressCreate}/>
        <Resource name="User" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="Material" list={MaterialList} show={MaterialShow} edit={MaterialEdit} create={MaterialCreate} icon={MaterialIcon} />
        <Resource name="MaterialCopy" list={MaterialCopyList} show={MaterialCopyShow} edit={MaterialCopyEdit} create={MaterialCopyCreate}/>
        <Resource name="Rent" list={RentList} create={RentCreate} show={RentShow} />
        <Resource name="Reservation" list={ReservationList} show={ReservationShow} edit={ReservationEdit} icon={ReservationIcon} />
        <Resource name="Genre" list={GenreList} show={GenreShow} edit={GenreEdit} create={GenreCreate} icon={GenreIcon} />
        <Resource name="Publisher" list={PublisherList} show={PublisherShow} edit={PublisherEdit} create={PublisherCreate} icon={PublisherIcon} />
    </Admin>
  );
}

export default App;