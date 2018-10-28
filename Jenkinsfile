pipeline {
	agent {
		docker { 
			image 'jenkins:alpine' 
			args '-it --entrypoint=/bin/sh'
		}
	}
	stages {
		stage('Build'){
			steps {
				sh 'echo building on cat /proc/self/cgroup | grep pids'
			}
		}
	}
}