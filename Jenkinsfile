pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building'
                bat 'echo building %BUILD_ID%'
                input 'ECHO RECEIVED CORRECTLY?'
            }
        }
    }
    post {
        always {
            echo 'build status is %BUILD_STATUS%'
        }
    }
}
