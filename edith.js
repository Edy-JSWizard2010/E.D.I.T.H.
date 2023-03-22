
    const params = new URLSearchParams(window.location.search);
    var userId = params.get('userId');
    var userPwd = params.get('userPwd');
    console.log(userId);
    console.log(userPwd);
    var user1 = {name: 'Happy Hogan', userId:'happy.hogan.in@EDITH.com', pwd: 'password'}
    var user2 = {name: 'Peter Parker',userId:'peter.parker.in@EDITH.com', pwd: 'Ironman928'}
    var users = {};
    users[user1.name] = user1;
    users[user2.name] = user2;
    var foundUser = users[userId];
    var badUser = document.getElementById("badUser");
    var badPwd = document.getElementById("badPwd");
    var success = document.getElementById("success");
 
    if(foundUser) {
        if(foundUser.pwd==userPwd){
            console.log('welcome');
            badUser.style.display = 'none';
            badPwd.style.display = 'none';
            success.style.display = 'block';
            success.innerHTML = 'Hello ' + foundUser.name
        } else {
            console.log('invalid credential');       
            badUser.style.display = 'none';
            badPwd.style.display = 'block';
            success.style.display = 'none';
        }

    } else {
        console.log('user not found for id:' , userId);
        badUser.style.display = 'block';
        badPwd.style.display = 'none';
        success.style.display = 'none';
    }

    console.log(users[userId]);