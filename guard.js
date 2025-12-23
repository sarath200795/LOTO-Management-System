const DB_URL = "https://loto-pro-f7417-default-rtdb.firebaseio.com/"; 

(function() {
    const orgId = sessionStorage.getItem("loto_org_id");
    const userName = sessionStorage.getItem("loto_user_name");

    // If session data is missing, immediately redirect to login
    if (!orgId || !userName) {
        window.location.href = 'auth.html';
    }
})();