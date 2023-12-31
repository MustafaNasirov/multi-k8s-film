docker build -t mustafansrv/multi-client:latest -t mustafansrv/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t mustafansrv/multi-server:latest -t mustafansrv/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t mustafansrv/multi-worker:latest -t mustafansrv/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push mustafansrv/multi-client:latest
docker push mustafansrv/multi-server:latest
docker push mustafansrv/multi-worker:latest

docker push mustafansrv/multi-client:$SHA
docker push mustafansrv/multi-server:$SHA
docker push mustafansrv/multi-worker:$SHA

kubectl apply -f k8s/crds/
sleep 45
echo "Checking if CRD is installed"
kubectl get crd certificates.cert-manager.io

kubectl apply -f k8s/main/

kubectl set image deployments/server-deployment server=mustafansrv/multi-server:$SHA
kubectl set image deployments/client-deployment client=mustafansrv/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=mustafansrv/multi-worker:$SHA


