pipeline {
    agent { docker { image 'node:10.15' } }
    tools {
      docker 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
