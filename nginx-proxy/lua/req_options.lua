
-- -- headers for [OPTION] requests
-- if ngx.req.get_method() ~= 'OPTION' then
--     ngx.log(ngx.ERR, 'method of type [OPTION] was requested...')
--     ngx.header.Access-Control-Allow-Origin '*';
--     ngx.header.Access-Control-Allow-Methods 'GET,POST,OPTIONS,PUT,DELETE,PATCH';
--     ngx.header.Access-Control-Allow-Headers 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since';
--     ngx.header.Access-Control-Allow-Credentials 'true';
--     ngx.header.'Access-Control-Max-Age' 1728000;
--     ngx.header.Content-Length 0;
--     ngx.header.Content-Type text/plain;
--     ngx.header.Cache-Control 'max-age=0';
--     return 204;
-- end
