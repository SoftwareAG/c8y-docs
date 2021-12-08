pipeline {
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
    skipStagesAfterUnstable()
  }
  agent {
    kubernetes {
      inheritFrom 'c8y-hugo'
      defaultContainer 'default'
    }
  }

  environment {
    YUM_SRV = 'resources.cumulocity.com'
    YUM_USR = 'hudson'
    YUM_DEST_DIR = '/var/www/staticpage-guides/guides'
    HUGO_PARAMS = ""
  }

  stages {
    stage('Checkout') {
            steps {
                git branch: "master", credentialsId: "jenkins-master", url:'git@github.com:SoftwareAG/c8y-docs.git'
            }
        }
    stage('Deploy') {
      steps {
        sshagent(['jenkins-master']) {
        sh '''bash --login
          python /docsRepoScanner.py ./
          pwd
          ls
          rsync -e "ssh -o StrictHostKeyChecking=no" -avh output.json ${YUM_USR}@${YUM_SRV}:${YUM_DEST_DIR}/releases.json --delete
          '''
        }
      }
    }
  }
}
