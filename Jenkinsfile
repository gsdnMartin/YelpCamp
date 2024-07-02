pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }

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
                sh 'npm install'
                sh "ls"
                sh "pwd"
            }
            
        }

        /*
        stage("Test App") {
            steps {
                sh "npm test"
            }
        }
        
        
        stage("Deploy App") {
            steps {
                sh "npm run build"
            }
        }*/
      
    }
}
