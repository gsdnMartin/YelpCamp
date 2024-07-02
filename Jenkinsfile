pipeline {
    agent any

    stages {
        stage("Clean Up the Workspace") {
            steps {
                cleanWs()
            }
        }

        stage("Ckeckout from SCM") {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/gsdnMartin/YelpCamp.git'
            }
        }
      
    }
}
