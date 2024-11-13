import React from 'react';
import {userService} from "@/sevices/api.service";
import UserComponent from "@/components/UserComponent";

const UsersPage = async () => {

   const allUsers = await userService.getAllUsers();



  return (
        <div>
            <ul>
            {
                allUsers.map((user:IUser) =>
                    (<li key={user.id}>
                        <UserComponent user={user}/>
                    </li>))

            }
            </ul>

            
        </div>
    );
};

export default UsersPage;