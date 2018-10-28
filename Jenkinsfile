pipeline {
	agent {
		dockerfile true
	}
	stages {
		stage('Build'){
			steps {
				sh 'echo building on cat /proc/self/cgroup | grep pids'
			}
		}
	}
}
