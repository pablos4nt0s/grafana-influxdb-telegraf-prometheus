do_cleanup () {
	docker-compose down

	rm -rf grafana/oss/data

	for d in $(docker volume ls -qf dangling=true); do 
		docker volume rm $d
	done

	for i in $(docker images --filter "dangling=true" -q --no-trunc); do
		docker rmi $i
	done
	
	for i in $(docker images | grep "none"); do
		i=$(echo $i | awk '/ / { print $3 }')
		docker rmi $i
	done

	for d in $(docker ps -qa --no-trunc --filter "status=exited"); do
		docker rm $d
	done

}

do_cleanup || exit 
