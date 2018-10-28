pipeline {
	agent {
		docker {
			image 'alpine'
			args '-it'
		}
	}
	stages {
		stage('Build'){	
			steps {
				sh 'echo building on'
				sh 'cat /proc/self/cgroup | grep pids'
				sh 'echo container ID is Container.Id or ${DOCKER_CONTAINER_ID}'
				sh 'echo building ${Build_Id}'
			}
		}
	}
}
