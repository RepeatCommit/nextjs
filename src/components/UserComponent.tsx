import React, {FC} from 'react';
import Link from "next/link";


type IProps = {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <Link href={`/users/${user.id}`}>{user.id} :{user.name}</Link>





        </div>
    );
};

export default UserComponent;