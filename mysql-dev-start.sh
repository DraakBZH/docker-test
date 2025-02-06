sudo docker run \
--name docker-mysql \
-v ./data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD='rootdraak' \
-e MYSQL_DATABASE='draakdb' \
-e MYSQL_USER='draak' \
-e MYSQL_PASSWORD='draakpassword' \
-p 3306:3306 \
--rm \
-d \
mysql