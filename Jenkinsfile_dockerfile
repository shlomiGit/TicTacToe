pipeline {
	agent {
		dockerfile true
	}
	stages {
		stage('Build'){
			steps {
				sh 'echo building on'
				sh 'cat /proc/self/cgroup | grep pids'
			}
		}
	}
}
