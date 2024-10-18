import {useEffect, useState} from 'react';
import UserListContainer from '../../components/userListContainer/UserListContainer';
import { allUsersFetch } from '../../utils/fetch';

const UserListPage = () => {
  return (
    <UserListContainer />
  )
}

export default UserListPage;