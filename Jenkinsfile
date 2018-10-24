pipeline {
    agent any
    stages {
        stage('BuildWindows') {
		when {
			not { isUnix() }
		}
		steps {
                echo 'Building Windows'
                bat 'echo echoing from bat, on build %BUILD_ID%'
            }
        }
	stage('BuildLinux'){
		when {
			isUnix()
		}
		steps {
                echo 'Building Linux'
                sh 'echo echoing from sh, on build %BUILD_ID%'
		}
	}
	stage('BuildAny'){		
                input 'ECHO RECEIVED CORRECTLY?'
	}
    }
    post {
        always {
            echo 'build status is %BUILD_STATUS%'
            mail to: 'mail_s@walla.com',
             subject: "Campleted Pipeline: ${currentBuild.fullDisplayName}",
             body: "%BUILD_ID% has completed"
        }
    }
}