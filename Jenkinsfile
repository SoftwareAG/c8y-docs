YUM_DEST_DIR = '/var/www/staticpage-new/guides'

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
    stage('Configure default') {
      when {
        branch('default')
      }
      steps {
        script {
          YUM_DEST_DIR = '/var/www/staticpage-guides/'
        }
      }
    }
    stage('Build') {
      steps {
        sh 'hugo'
      }
    }
    stage('Deploy') {
      steps {
        sshagent(['hudson-ssh-resources']) {
          sh "rsync -avh ./public/* ${env.YUM_USR}@${env.YUM_SRV}:${YUM_DEST_DIR}"
        }
      }
    }
  }
}
