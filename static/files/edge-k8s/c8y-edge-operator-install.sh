#!/bin/bash
set -e;  # stop on errors

# 
# Install Cumulocity IoT Edge Operator version 1017.0.0 
# 

# Enter Edge Operator version and repository credentials
read -p "Enter Cumulocity IoT Edge Operator version (defaults to 1017.0.0): " EDGE_OPERATOR_VERSION
read -p "Enter repository username: " EDGE_REPO_USERNAME
read -s -p "Enter repository password: " EDGE_REPO_PASSWORD

if [ "$EDGE_OPERATOR_VERSION" == "" ]; then
	EDGE_OPERATOR_VERSION="1017.0.0"
fi

if [ "$EDGE_REPOSITORY_URI" == "" ]; then
	EDGE_REPOSITORY_URI=registry.c8y.io
fi

echo -e "\n\nInstalling Cumulocity IoT Edge Operator, version ${EDGE_OPERATOR_VERSION} from ${EDGE_REPOSITORY_URI}\n\n"

# This adds Edge Operator chart repository to your helm 
helm repo add --username "${EDGE_REPO_USERNAME}" --password "${EDGE_REPO_PASSWORD}" --force-update cumulocity-iot-edge-repo "https://${EDGE_REPOSITORY_URI}/chartrepo/edge"
helm repo update

# Installs or upgrades Edge Operator 
helm upgrade --install cumulocity-iot-edge-operator cumulocity-iot-edge-repo/cumulocity-iot-edge-operator --version="${EDGE_OPERATOR_VERSION}" --set image.repository="${EDGE_REPOSITORY_URI}/edge/cumulocity-iot-edge-operator" --set imageCredentials.registry="${EDGE_REPOSITORY_URI}" --set imageCredentials.username="${EDGE_REPO_USERNAME}" --set imageCredentials.password="${EDGE_REPO_PASSWORD}"
