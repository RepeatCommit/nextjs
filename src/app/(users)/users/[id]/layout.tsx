import React from 'react';
import type {Metadata} from "next";
import {userService} from "@/sevices/api.service";


export const generateMetadata = async ({params}:{params:{id:string}}):Promise <Metadata> => {
    console.log(params.id, '!!!!!');
   const user = await userService.getUserById(params.id);

    return {title: user?.username};
}

type Props = {children: React.ReactNode};


const UserLayout = ({children}:Props) => {
    return (
        <div>
            {children}


        </div>
    );
};

export default UserLayout;