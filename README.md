# oidc-custom-authorization-server-sample

Here is a sample of a full stack (but very simple) application describes a general case of creating a custom authorization server using the spring-security-oauth2 module and an interaction between the custom authorization server, a react application as a front-end side of the application and a resource server.

## The parts of the application

The application consists of three parts:

1. React application as a front-end;
2. Resource server;
3. Custom authorization server.

## How it works

An interaction is performed according to the OIDC specification (at least I tried to do that).

- Authentication method: client secret basic;
- Grant types: authorization code, refresh token;
- Scopes: opeind, profile.

In short:

1. the client (React application) sends a request to the authorization server where a user enters his username and password;
2. the authorization server sends a code (according to the authorization code flow) back to the client;
3. the client sends another request and attach the received code in order to obtain an access_token (and id_token - oidc);
4. the authorization server verifies the code and then generates the access_token and the id_token which are sent back to the client;
5. the client uses received tokens to obtain private resources in the resource server that verifies tokens using the public key from the authorization server.
