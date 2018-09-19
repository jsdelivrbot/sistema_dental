#!/usr/bin/env bash
echo "Creating mongo users..."
mongo admin --host localhost -u root -p 123 --eval "db.createUser({user: 'sis_dental', pwd: '123', roles: [{role: 'readWrite', db: 'dental'}]}); db.createUser({user: 'admin', pwd: '123', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
echo "Mongo users created."
