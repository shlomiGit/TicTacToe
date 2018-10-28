pipeline {
	agent {
		docker { 
			image 'jenkins:alpine' 
			args '-it'
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
