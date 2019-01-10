pipeline {
    agent { docker { label: 'docker', image 'node:10.15' } }
    tools {
      org.jenkinsci.plugins.docker.commons.tools.DockerTool 'docker'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
