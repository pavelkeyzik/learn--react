pipeline {
    agent {
      label 'dockerserver'
    }
    stages {
        stage('build') {
            agent {
              docker {
                label 'dockerserver'
                image 'node:10.15'
              }
            }
            steps {
                sh 'npm --version'
            }
        }
    }
}
