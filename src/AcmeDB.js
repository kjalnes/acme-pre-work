export default class AcmeDB{
    constructor(usersObj) {
        // access array of users
        this.users = usersObj.users;
        // add id property to initial users
        return this.users.forEach(function(user, index){
            user.id = index+1;
        })
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
        return this.users.filter(function(user){
            return user.id === id;
        })[0]; // always returns an array of one element
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
