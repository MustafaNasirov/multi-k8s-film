docker build -t mustafansrv/multi-client:latest -t mustafansrv/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t mustafansrv/multi-server:latest -t mustafansrv/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t mustafansrv/multi-worker:latest -t mustafansrv/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push mustafansrv/multi-client:latest
docker push mustafansrv/multi-server:latest
docker push mustafansrv/multi-worker:latest

docker push mustafansrv/multi-client:$SHA
docker push mustafansrv/multi-server:$SHA
docker push mustafansrv/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployment/server-deployment server=mustafansrv/multi-server$SHA
kubectl set image deployment/client-deployment client=mustafansrv/multi-client$SHA
kubectl set image deployment/worker-deployment worker=mustafansrv/multi-worker$SHA


