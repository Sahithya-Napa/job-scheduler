function check()
{
    var user=document.getElementById("usn");
    var pass=document.getElementById("pass");
    if(user.value==""||pass.value=="")
    {
        alert("its not a valid please check it once");
        return false;
    }
    else{
        return true;
    }
}