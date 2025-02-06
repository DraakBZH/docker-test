# Consignes

- Creer une App NodeJS qui communique avec une DB
- Dockeriser  mon app
- Pousser l'image sur Docker Hub
- Creer un docker compose pour faire tourner mon app
- Transformer mon compose en service Linux
- Tout automatiser avec github et github Action (déploiement compris)

# Le container Mysql
## Start
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
## S'y connecter
```
mysql -u draak -p -h 127.0.0.1 draakdb
```

## peupler la base de donnée
```sql

CREATE TABLE utilisateurs (
  id INT NOT NULL AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO utilisateurs (nom, email) VALUES ('Alice Dupont', 'alice.dupont@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Bob Martin', 'bob.martin@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Claire Bernard', 'claire.bernard@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('David Laurent', 'david.laurent@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Emma Robert', 'emma.robert@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Franck Petit', 'franck.petit@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Gabriel Moreau', 'gabriel.moreau@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Hélène Simon', 'helene.simon@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Isabelle Dubois', 'isabelle.dubois@example.com');
INSERT INTO utilisateurs (nom, email) VALUES ('Julien Lefevre', 'julien.lefevre@example.com');

```


# Conteneurisation de mon app

Je construit mon image grace au dockerfile
```
sudo docker build -t docker-test:latest .
```

je peux tester en local
```
docker run \
-p 3001:3001 \
-e PORT="3001" \
-e MYSQL_HOST="10.118.9.71" \
-e MYSQL_USER="draak" \
-e MYSQL_PASS="draakpassword" \
-e MYSQL_DB="draakdb" \
--rm \
--name docker-test \
docker-test:latest
```

# Faire un projet docker-compose

voir fichier

# Uploader mon image sur dockerhub
on se log sur docker hub
```
docker login -u draakbzh
```

on pousse l'image
```
docker push draakbzh/docker-test:latest
```

# Automatiser la création et l'upload de mon image avec Github Action

