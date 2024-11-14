import {Metadata} from "next";

export const metadata:Metadata = {
    title:'UsersLayout Metadata',
}
type Props ={children:React.ReactNode}
const UsersLayout = ({children}:Props) => {
    return (
        <div>

            <div>users layout</div>

            {children}
        </div>
    );
}

export default UsersLayout;