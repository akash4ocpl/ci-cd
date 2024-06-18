pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Pull the latest code from the repository
                    git 'https://your-repo-url.git'
                }
                // Build the Docker image
                sh 'docker build -t your-dockerhub-username/node-app .'
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
                    // Login to DockerHub
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                        sh 'echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin'
                    }
                    // Push the Docker image to DockerHub
                    sh 'docker push your-dockerhub-username/node-app'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker container
                    sh 'docker run -d -p 3000:3000 your-dockerhub-username/node-app'
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
