pipeline {
    agent {
      label 'docker'
    }
    stages {
        stage('build') {
            agent {
              docker {
                label 'docker'
                image 'node:10.15'
              }
            }
            steps {
                sh 'npm --version'
            }
        }
    }
}
