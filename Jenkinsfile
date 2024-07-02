pipeline {
    agent any

    tools {nodejs "Node18"}

    environment {
        MONGODB_URI = 'mongodb+srv://gusdanmx:eGjj7PQY2TaCzUvO@cluster0.6fzwzeu.mongodb.net/?appName=Cluster0'
    }
        
    stages {
        stage("Clean Up the Workspace") {
            steps {
                cleanWs()
                sh 'HI'
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
            }
            
        }

        
        stage("Test App") {
            steps {
                sh 'echo Testing...'
                //sh "npm test"
            }
        }
        
        
        stage("Deploy App") {
            steps {
                sh "node app.js"
            }
        }
      
    }
}
