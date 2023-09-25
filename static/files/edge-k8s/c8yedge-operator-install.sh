#!/bin/bash

# 
# Install Cumulocity IoT Edge Operator
# Usage:
#   ./c8yedge-operator-install.sh [-v C8YEDGE_OPERATOR_VERSION] [-n C8YEDGE_OPERATOR_NAMESPACE] [-r C8YEDGE_REPO_URI] -u C8YEDGE_REPO_USERNAME -p C8YEDGE_REPO_PASSWORD
#       or
#   ENV_VAR=... ./c8yedge-operator-install.sh
#
# Example:
#   Installing latest version (1017.0.0) into 'c8yedge' namespace:
#     ./c8yedge-operator-install.sh -n 'c8yedge' -u 'edge' -p '*******'
#			or
#	  C8YEDGE_OPERATOR_NAMESPACE='c8yedge' C8YEDGE_REPO_USERNAME='edge' C8YEDGE_REPO_PASSWORD='*******' ./c8yedge-operator-install.sh
#
# Environment variables:
#   - C8YEDGE_OPERATOR_VERSION
#	  Version of C8y Edge Operator to install. Will install latest version if not specificed.
#
#	- C8YEDGE_OPERATOR_NAMESPACE
#	  Namespace in which to install. Will install in 'c8yedge' namespace if not specified.
#
#	- C8YEDGE_REPO_URI
#	  Edge Operator repository URI. Points to production repository 'registry.c8y.io' if not specified.
#
#	- C8YEDGE_REPO_USERNAME
#	  Username to access Edge Operator repository. Prompted if not specified.
#
#	- C8YEDGE_REPO_PASSWORD
#	  Password to access Edge Operator repository. Prompted if not specified.
#

display_usage() {
	echo ""
	echo "Usage:"
	echo "  ./c8yedge-operator-install.sh [-v C8YEDGE_OPERATOR_VERSION] [-n C8YEDGE_OPERATOR_NAMESPACE] [-r C8YEDGE_REPO_URI] -u C8YEDGE_REPO_USERNAME -p C8YEDGE_REPO_PASSWORD"
	echo "      or"
	echo "  ENV_VAR=... ./c8yedge-operator-install.sh"
	echo ""
	echo "Example:"
	echo "  Installing latest version (1017.0.0) into 'c8yedge' namespace:"
	echo "    ./c8yedge-operator-install.sh -n 'c8yedge' -u 'edge' -p '*******'"
	echo "		or"
	echo "  C8YEDGE_OPERATOR_NAMESPACE='c8yedge' C8YEDGE_REPO_USERNAME='edge' C8YEDGE_REPO_PASSWORD='*******' ./c8yedge-operator-install.sh"
	echo ""
	echo "Environment variables:"
	echo "  - C8YEDGE_OPERATOR_VERSION"
	echo "    Version of C8y Edge Operator to install. Will install latest version if not specificed."
	echo ""
	echo "  - C8YEDGE_OPERATOR_NAMESPACE"
	echo "    Namespace in which to install. Will install in 'c8yedge' namespace if not specified."
	echo ""
	echo "  - C8YEDGE_REPO_URI"
	echo "    Edge Operator repository URI. Points to production repository 'registry.c8y.io' if not specified."
	echo ""
	echo "  - C8YEDGE_REPO_USERNAME"
	echo "    Username to access Edge Operator repository. Prompted if not specified."
	echo ""
	echo "  - C8YEDGE_REPO_PASSWORD"
	echo "    Password to access Edge Operator repository. Prompted if not specified."
	echo ""
	exit 1
}

# Parse command line arguments
while getopts "v:n:r:u:p:h" flag; do
    case "${flag}" in 
        v) C8YEDGE_OPERATOR_VERSION="${OPTARG}";;
		n) C8YEDGE_OPERATOR_NAMESPACE="${OPTARG}";;
        r) C8YEDGE_REPO_URI="${OPTARG}";;
        u) C8YEDGE_REPO_USERNAME="${OPTARG}";;
        p) C8YEDGE_REPO_PASSWORD="${OPTARG}";;
		h) display_usage;;
        *) display_usage;;
    esac
done

# Set defaults if not specified
if [ -z "$C8YEDGE_OPERATOR_VERSION" ]; then
	C8YEDGE_OPERATOR_VERSION="1017.0.0"
fi

if [ -z "$C8YEDGE_OPERATOR_NAMESPACE" ]; then
	C8YEDGE_OPERATOR_NAMESPACE="c8yedge"
fi

if [ -z "$C8YEDGE_REPO_URI" ]; then
	C8YEDGE_REPO_URI="registry.c8y.io"
fi

if [ -z "$C8YEDGE_REPO_USERNAME" ]; then
	read -p "Enter username to access Edge Operator repository: " C8YEDGE_REPO_USERNAME
fi

if [ -z "$C8YEDGE_REPO_PASSWORD" ]; then
	read -s -p "Enter password to access Edge Operator repository: " C8YEDGE_REPO_PASSWORD
fi



# Stop on errors
set -e

echo -e "\n\nInstalling Cumulocity IoT Edge Operator, version ${C8YEDGE_OPERATOR_VERSION} from ${C8YEDGE_REPO_URI}\n\n"

# Add Edge Operator chart repository to Helm
helm repo add --username "${C8YEDGE_REPO_USERNAME}" --password "${C8YEDGE_REPO_PASSWORD}" --force-update c8yedge-repo "https://${C8YEDGE_REPO_URI}/chartrepo/edge"
helm repo update

# Install or upgrade Edge Operator 
helm upgrade --install c8yedge-operator c8yedge-repo/cumulocity-iot-edge-operator \
    --namespace "${C8YEDGE_OPERATOR_NAMESPACE}" \
    --create-namespace \
    --version="${C8YEDGE_OPERATOR_VERSION}" \
    --set image.repository="${C8YEDGE_REPO_URI}/edge/cumulocity-iot-edge-operator" \
    --set imageCredentials.registry="${C8YEDGE_REPO_URI}" \
    --set imageCredentials.username="${C8YEDGE_REPO_USERNAME}" \
    --set imageCredentials.password="${C8YEDGE_REPO_PASSWORD}"
