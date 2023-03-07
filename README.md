# Welcome to the Learn-Traefik repository. 
This project showcases how to use Traefik as a reverse proxy. The example provided demonstrates how to host two applications on a single server. To run the project, please switch to the part_one branch. You will find two files: docker-compose.yml and docker-compose.traefik.yml. 
Prior to running these commands, create a network called towapp using the following command
```docker network create towapp```
Once done, execute the following commands to run the containers
```docker compose -f docker-compose.traefik.yml up -d```
```docker compose up -d```
Check traefik dashboard at http://dash.localhost
Check both apps first and second on http://one.localhost and http://two.localhost respectively.
