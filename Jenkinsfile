pipeline {
    agent { label: 'dockerserver' }
    tools {
      org.jenkinsci.plugins.docker.commons.tools.DockerTool 'docker'
    }
    stages {
        stage('build') {
            agent {
              label: 'dockerserver'
              image 'node:10.15'
            }
            steps {
                sh 'npm --version'
            }
        }
    }
}
