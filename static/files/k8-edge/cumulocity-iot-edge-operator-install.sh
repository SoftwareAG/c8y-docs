#!/bin/bash
set -e;  # stop on errors
exit_code=0

# 
# Install Cumulocity IoT Edge Operator version 1017.0.0 
# 

# Enter Edge Operator version and repository credentials
read -p "Enter Cumulocity IoT Edge Operator version (1017.0.0): " EDGE_OPERATOR_VERSION
read -p "Enter repository username: " EDGE_REPO_USERNAME
read -s -p "Enter repository password: " EDGE_REPO_PASSWORD

echo
echo

EDGE_REPO_URL=https://registry.c8y.io/chartrepo/edge

echo "Installing Cumulocity IoT Edge Operator, version ${EDGE_OPERATOR_VERSION} from ${EDGE_REPO_URL}"
echo
echo

(
  set +e;
  (
    set -e;
	# This adds Edge Operator chart repository to your helm 
	helm repo add --username "${EDGE_REPO_USERNAME}" --password "${EDGE_REPO_PASSWORD}" --force-update cumulocity-iot-edge-repo "${EDGE_REPO_URL}"
	helm repo update 

	echo
	echo

	# Installs Edge Operator 
	helm upgrade --install --username="${EDGE_REPO_USERNAME}" --password="${EDGE_REPO_PASSWORD}" --version="${EDGE_OPERATOR_VERSION}" cumulocity-iot-edge-operator cumulocity-iot-edge-repo/cumulocity-iot-edge-operator 
  )
  exit_code="$?"
)

if [[ "exit_code" == '0' ]]; then
	echo "Installed Cumulocity IoT Edge Operator, version ${EDGE_OPERATOR_VERSION}"
fi 
