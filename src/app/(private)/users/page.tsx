import React from 'react';
import UsersComponent from "@/app/components/UsersComponent";

const UsersPage = async () => {

     const users =    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

    return (
        <div>
          <UsersComponent users={users} />
        </div>
    );
};

export default UsersPage;