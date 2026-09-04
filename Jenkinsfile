pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Environment Check') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Test') {
            steps {
                bat 'node --test tests\\app.test.mjs'
            }
        }

        stage('Build Check') {
            steps {
                bat 'node scripts\\build-check.mjs'
            }
        }
    }

    post {
        success {
            echo 'Releaf-Book Jenkins pipeline completed successfully.'
        }

        failure {
            echo 'Releaf-Book Jenkins pipeline failed.'
        }
    }
}
