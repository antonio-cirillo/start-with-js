Comando per visualizzare tutte le immagini.
```
docker image ls
```
Comando per eliminare un'immagine.
```
docker image rm image-name
```
Comando per effettuare la build dell'immagine. Specificare il nome dell'immagine e il path.
```
docker build -t name path
```
Comando per visualizzare tutti i container. Il flag *a* permette di visualizzare anche i container che non sono in esecuzione.
```
docker ps [-a]?
```
Comando per eseguire un'immagine.
```
docker run [-d]? [-v "path"[:"path"]?]? [-p portaEsterna:portaInterna] [--name container-name]? image-name
```
Comando per rimuovere un container.
```
docker rm container-name [-f]?
```
Comando per visualizzare i log di un container.
```
docker logs container-name
```
Comando per eseguire bash sul container.
```
docker exec -it container-name bash
```
Comando per eseguire il container tramite docker-compose.
```
docker-compose up -d
```
Comando per eliminare il container e i volumi.
```
docker-compose down -v
```