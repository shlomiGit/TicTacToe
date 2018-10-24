pipeline {
	agent any
	stages {
        	stage('BuildWindows') {
			when {
				not { expression { isUnix() } }
			}
			steps {
	                	echo 'Building Windows'
        	        	bat 'echo echoing from bat, on build %BUILD_ID%'
			}
        	}
		stage('BuildLinux'){
			when {
				expression { isUnix() }
			}
			steps {
                	echo 'Building Linux'
	                sh 'echo echoing from sh, on build $BUILD_ID'
			}
		}
		stage('BuildAny'){	
                	input {
				message "ECHO RECEIVED CORRECTLY?"
			}
			steps {
				echo "input received correctly"
			}
		}
	}
	post {
        	always {
			echo 'build status is $BUILD_STATUS'
		}
	}
}