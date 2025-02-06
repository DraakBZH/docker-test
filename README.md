# Consignes

- Creer une App NodeJS qui communique avec une DB
- Dockeriser  mon app
- Pousser l'image sur Docker Hub
- Creer un docker compose pour faire tourner mon app
- Transformer mon compose en service Linux
- Tout automatiser avec github et github Action (déploiement compris)

# Le container Mysql
```
sudo docker run \
--name docker-mysql \
-v ./data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD='rootdraak' \
-e MYSQL_DATABASE='draakdb' \
-e MYSQL_USER='draak' \
-e MYSQL_PASSWORD='draakpassword' \
-p 3306:3306 \
--rm \
mysql
```