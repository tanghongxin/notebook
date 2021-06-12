pipeline {
    agent any
    options {
        timestamps()
    ***REMOVED***
    environment {
        ONLINE_SITE = 'https://notebook.abyssal.site'
    ***REMOVED***
    stages {
        stage('Build') { 
            steps {
                sh 'yarn'
                sh 'yarn build' 
            ***REMOVED***
        ***REMOVED***
        stage('Deploy') {
            steps {
                dir('/usr/share/nginx') {
                    sh 'rm -rf notebook.back'
                    sh 'mv notebook notebook.back' 
                    sh 'mv ${WORKSPACE***REMOVED***/docs/.vuepress/dist .'
                    sh 'mv dist notebook'
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    post {
        always {
            emailext body: "View on ${ONLINE_SITE***REMOVED***, See detail at ${BUILD_URL***REMOVED***",
                    recipientProviders: [developers(), requestor()],
                    subject: "Jenkins: ${JOB_NAME***REMOVED*** ${GIT_BRANCH***REMOVED*** build ${currentBuild.result***REMOVED***",
                    to: 'hongxin.tang@hotmail.com'
        ***REMOVED***
    ***REMOVED***
***REMOVED***
