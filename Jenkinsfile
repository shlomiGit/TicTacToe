pipeline {
	agent none
	parameters {
		string(name: 'exampleParameter')
	}
	stages {
        	stage('BuildWindows') {
			agent { docker { image 'dockcross/windows-x64' } }
			when {
				not { expression { isUnix() } }
			}
			steps {
	                	echo 'Building Windows'
        	        	bat 'echo echoing from bat, on build %BUILD_ID%'
			}
        	}
		stage('BuildLinux'){
			agent { docker { image 'alpine' } }
			when {
				expression { isUnix() }
			}
			steps {
                	echo 'Building Linux'
	                sh 'echo echoing from sh, on build $BUILD_ID'
			sh 'echo parameter value is: ${params.exampleParameter}
			}
		}
		stage('BuildAny'){	
			agent any
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