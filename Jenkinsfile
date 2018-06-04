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
        echo 'build status is %BUILD_STATUS%'
    }
}
