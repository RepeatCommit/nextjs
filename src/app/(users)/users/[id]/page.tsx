import React from 'react';
import {userService} from "@/sevices/api.service";


type Params = {params: {id: string}};

const UserPage = async ({params}:Params) => {
   const user = await userService.getUserById(params.id)
    return (
        <div>
            {user?.name} {user?.email}
        </div>
    );
};

export default UserPage;