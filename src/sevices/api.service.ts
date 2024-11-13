const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers:() => base + urlBuilder.userBaseUrl,
    singleUsers: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id,

}

const userService = {
    getAllUsers: async (): Promise<IUser[]> =>{
        const users = await fetch(urlBuilder.allUsers())
            .then(response => response.json());
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser | null> =>{
        const user: IUser = await fetch(urlBuilder.singleUsers(id))
            .then(response => response.json());
        return user;
    }
}

export {
    userService,


}