export default class AcmeDB{
    constructor(usersObj) {
        // access array of users and add id prop to initial users
        this.users = usersObj.users.map((user, index) => {
            user.id = index + 1;
            return user;
        });
    };
    addUser(newUser){
        const id = this.users.length+1;
        newUser.id = id;
        this.users.push(newUser);
    };
    showUsers(){
        return this.users.map(function(user){
            return user.name;
        }).join(', ');
    };
    findById(id){
        return this.users.find(function(user){
            return user.id === id;
        });
    };
    removeUserById(id) {
        this.users = this.users.filter(function(user){
            return user.id !== id;
        });
    };
    editUser(userObj){
        return this.users.forEach(function(user){
            if(user.id === userObj.id) {
                user.name = userObj.name;
            }
        });
    };
}
