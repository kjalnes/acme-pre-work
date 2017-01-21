export default class AcmeDB{
    constructor(usersObj) {//naming.. call this param users
        // access array of users and add id prop to initial users
        //dry this out - use addUser
        this.users = usersObj.users.map((user, index) => {
            user.id = index + 1;
            return user;
        });
    };
    addUser(newUser){//naming.. just instead of newUser just name this user
        //this could result in duplicate id
        //find the maxId and increment
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
        //this might be fine.. is find implemented in all browsers
        //filter might be safer.. i could be wrong on this :)
        return this.users.find(function(user){
            return user.id === id;
        });
    };
    removeUserById(id) {
        this.users = this.users.filter(function(user){
            return user.id !== id;
        });
    };
    editUser(userObj){//better name might be editedUser?
        return this.users.forEach(function(user){
            if(user.id === userObj.id) {
                user.name = userObj.name;
            }
        });
    };
}
