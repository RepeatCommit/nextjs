import {Metadata} from "next";

export const metadata:Metadata = {
    title:'PostsLayout Metadata',
}
type Props ={children:React.ReactNode}
const PostsLayout = ({children}:Props) => {
    return (
        <div>
            posts layout
    {children}
    </div>
);
}

export default PostsLayout;