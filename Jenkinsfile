YUM_DEST_DIR = '/var/www/staticpage-new/guides'
HUGO_PARAMS = ""

pipeline {
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
    skipStagesAfterUnstable()
  }
  agent {
    docker {
      image 'jguyomard/hugo-builder'
    }
  }

  environment {
    YUM_SRV = 'yum.cumulocity.com'
    YUM_USR = 'hudson'
  }

  stages {
    stage('Configure') {
      steps {
        script {
          if (env.BRANCH_NAME == 'default') {
            YUM_DEST_DIR = '/var/www/staticpage-guides/'
          } else {
            HUGO_PARAMS = "--config develop.toml"
          }
        }
      }
    }
    stage('Build') {
      steps {
        sh "hugo ${HUGO_PARAMS}"
      }
    }
    stage('Deploy') {
      steps {
        sshagent(['hudson-ssh-resources']) {
          sh "rsync -avh ./public/* ${env.YUM_USR}@${env.YUM_SRV}:${YUM_DEST_DIR} --delete"
        }
      }
    }
  }
}
