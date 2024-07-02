pipeline {
    agent any

    stages {
        stage("Clean Up the Workspace") {
            steps {
                cleanWs()
            }
        }

        stage("Checkout from SCM") {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/gsdnMartin/YelpCamp.git'
            }
        }

        stage("Building App") {
            steps {
                sh "npm install"
            }
            
        }

        stage("Test App") {
            steps {
                sh "npm test"
            }
        }

        stage("Deploy App") {
            steps {
                sh "npm run build"
            }
        }
      
    }
}
