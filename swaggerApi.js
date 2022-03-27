module.exports = function(){
/**
* Get user
* @param {username} username
**/
function getUserUsingGET(username){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/${username}`,
        method: "GET",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* Delete user
* @param {Authorization} Authorization header
* @param {username} user name
**/
function deleteUserUsingDELETE_1(Authorization, username){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/${username}`,
        method: "DELETE",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "application/json",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* Updates a user
* @param {body} The values to update user entity
* @param {user names} username
**/
function updateUserUsingPUT_1(body, user_names){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/{username}`,
        method: "PUT",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* Refreshes JWT Token
* @param {tokenRefreshRequest} jwt token
**/
function refreshTokenUsingPOST_1(tokenRefreshRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/token/refresh`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: tokenRefreshRequest,
    })
    return webRequest0;
}

/**
* Gets JWT token for user credentials
* @param {authenticationRequest} authenticationRequest
**/
function loginUserUsingPOST_1(authenticationRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/login`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: authenticationRequest,
    })
    return webRequest0;
}

/**
* Removes jwt and refresh_token from database
* @param {logoutRequest} logoutRequest
**/
function logoutUserUsingPOST_1(logoutRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/logout`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: logoutRequest,
    })
    return webRequest0;
}

/**
* Lists all merchants
* @param {limit} the size of the page to be returned
* @param {page} page zero-based page index
**/
function listMerchantsUsingGET(limit, page){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/merchants`,
        method: "GET",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        queryString: {
            "limit": limit,
            "page": page
        },
    })
    return webRequest0;
}

/**
* Get users statistics
**/
function listStatsUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/stats`,
        method: "GET",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* Get user
* @param {username} username
**/
function getUserSqlInjUsingGET(username){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/${username}/sqlinj`,
        method: "GET",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* resetPassword
* @param {body} The values to reset password
**/
function resetPasswordUsingPOST_1(body){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users/password/reset`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* refreshTokenUser
* @param {id} id
**/
function refreshTokenUserUsingGET(id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/refreshTokens/${id}/user`,
        method: "GET",
        headers: {
            "accept": "application/hal+json",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* refreshTokenUser
* @param {body} body
* @param {id} id
**/
function refreshTokenUserUsingPOST_1(body, id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/refreshTokens/${id}/user`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* refreshTokenUser
* @param {id} id
**/
function refreshTokenUserUsingDELETE_1(id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/refreshTokens/${id}/user`,
        method: "DELETE",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
    })
    return webRequest0;
}

/**
* refreshTokenUser
* @param {body} body
* @param {id} id
**/
function refreshTokenUserUsingPATCH_1(body, id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/refreshTokens/${id}/user`,
        method: "PATCH",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* refreshTokenUser
* @param {body} body
* @param {id} id
**/
function refreshTokenUserUsingPUT_1(body, id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/refreshTokens/${id}/user`,
        method: "PUT",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* userEntityToken
* @param {id} id
**/
function userEntityTokenUsingGET(id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/userEntities/${id}/token`,
        method: "GET",
        headers: {
            "accept": "application/hal+json",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* userEntityToken
* @param {body} body
* @param {id} id
**/
function userEntityTokenUsingPOST_1(body, id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/userEntities/${id}/token`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* userEntityToken
* @param {id} id
**/
function userEntityTokenUsingDELETE_1(id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/userEntities/${id}/token`,
        method: "DELETE",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
    })
    return webRequest0;
}

/**
* userEntityToken
* @param {body} body
* @param {id} id
**/
function userEntityTokenUsingPATCH_1(body, id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/userEntities/${id}/token`,
        method: "PATCH",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* userEntityToken
* @param {body} body
* @param {id} id
**/
function userEntityTokenUsingPUT_1(body, id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/userEntities/${id}/token`,
        method: "PUT",
        headers: {
            "accept": "application/json",
            "content-type": "text/uri-list,application/x-spring-data-compact+json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* Lists all users
* @param {limit} the size of the page to be returned
* @param {page} page zero-based page index
**/
function listUsersUsingGET(limit, page){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users`,
        method: "GET",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        queryString: {
            "limit": limit,
            "page": page
        },
    })
    return webRequest0;
}

/**
* Create user
* @param {body} The values to new user
**/
function createUserUsingPOST_1(body){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/api/users`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: body,
    })
    return webRequest0;
}

/**
* getSchema
**/
function getSchema(){
    const constValue0 = `http`;
    return constValue0;
}

/**
* getHost
**/
function getHost(){
    const constValue0 = `advantageonlinebanking.com`;
    return constValue0;
}

/**
* getBasePath
**/
function getBasePath(){
    const constValue0 = ``;
    return constValue0;
}

return {
    getUserUsingGET,
    deleteUserUsingDELETE_1,
    updateUserUsingPUT_1,
    refreshTokenUsingPOST_1,
    loginUserUsingPOST_1,
    logoutUserUsingPOST_1,
    listMerchantsUsingGET,
    listStatsUsingGET,
    getUserSqlInjUsingGET,
    resetPasswordUsingPOST_1,
    refreshTokenUserUsingGET,
    refreshTokenUserUsingPOST_1,
    refreshTokenUserUsingDELETE_1,
    refreshTokenUserUsingPATCH_1,
    refreshTokenUserUsingPUT_1,
    userEntityTokenUsingGET,
    userEntityTokenUsingPOST_1,
    userEntityTokenUsingDELETE_1,
    userEntityTokenUsingPATCH_1,
    userEntityTokenUsingPUT_1,
    listUsersUsingGET,
    createUserUsingPOST_1,
    getSchema,
    getHost,
    getBasePath,
    $:{
        getSchema,
        getHost,
        getBasePath,
    },
};

}