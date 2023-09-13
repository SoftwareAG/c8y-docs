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
    YUM_SRV = 'staging-resources.cumulocity.com'
    YUM_USR = 'hudson'
    YUM_DEST_DIR = '/var/www/staging-resources/staticpage-guides/guides/'
    HUGO_PARAMS = ""
  }

  stages {
    stage('Build') {
      steps {
        sh '''bash --login
        python /previewScanner.py
        python /qa.py
          if [ -f "properties.json" ]
  then
  	DOC_VERSION=$( jq -r '.name' < properties.json )
    hugo ${HUGO_PARAMS} -d ./${DOC_VERSION}
  else
  	echo "Properties not found."
      exit 1
  fi
          '''
      }
    }
    stage('Deploy') {
      steps {
        sshagent(['jenkins-master']) {
          sh '''bash --login
          DOC_VERSION=$( jq -r '.name' < properties.json )
          echo ${DOC_VERSION}
          rsync -e "ssh -o StrictHostKeyChecking=no" -avh ./${DOC_VERSION} ${YUM_USR}@${YUM_SRV}:${YUM_DEST_DIR} --delete
          '''
        }
      }
    }
  }
}
