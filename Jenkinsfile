pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/akash4ocpl/ci-cd.git'
        BRANCH = 'main'
        WEBHOOK_SECRET = credentials('github-webhook-secret') // This uses the secret stored in Jenkins credentials
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Pull the latest code from the repository using GitHub credentials
                    git branch: "${BRANCH}", url: "${GIT_REPO}", credentialsId: 'github-credentials'
                }
                // Build the Docker image
                sh 'docker build -t akash4ocpl/node-app .'
            }
        }

        stage('Test') {
            steps {
                // You can add your test commands here
                sh 'echo "Running tests..."'
            }
        }

        stage('Push') {
            steps {
                script {
                    // Login to DockerHub using credentials
                    withCredentials([usernamePassword(credentialsId: '1234567890987654321', passwordVariable: 'OcplTech666@', usernameVariable: 'akash4ocpl')]) {
                        sh 'echo OcplTech666@ | docker login -u akash4ocpl --password-stdin'
                    }
                    // Push the Docker image to DockerHub
                    sh 'docker push akash4ocpl/node-app'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker container
                    sh 'docker run -d -p 5000:5000 akash4ocpl/node-app'
                }
            }
        }
    }

    post {
        always {
            // Clean up Docker containers and images
            sh 'docker system prune -f'
        }
    }
}
