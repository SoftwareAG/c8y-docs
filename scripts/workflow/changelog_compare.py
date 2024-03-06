#!/usr/bin/env python
"""\
This script is intended to iterate over all changelog files, compare the
 changelog version and the deployed version, and then set or remove the date
 property in the changelog to enable or disable the changelog for the website
 build.
"""

# Import modules
import os
import datetime
import frontmatter
import semver

# TODO: get the installed versions from their actual place
deployed_versions = {
    "cumulocity": "1020.0.0",
    "usagestats": "1.0.0",
    "apama-in-c8y": "24.18.0",
    "ui-c8y": "1019.6.11"
}

# Define the directory to scan
directory = "content/change-logs"

# Define maximum age of files to consider in days
max_file_age = 180
print(f"Using max file age {max_file_age} days")

# Get the current time
current_time = datetime.datetime.now()
print(f"Using current time {current_time}")

# Define testing parameter. if set to True files are not written and their content is printed
dry_run = True


# check if the file meets all conditions to require opening
def should_open_file(file_path):
    # Check if the file is a markdown file
    if file.endswith(".md"):
        # Get the last modified time of the file
        modified_time = os.path.getmtime(file_path)
        # Convert the modified time to a datetime object
        modified_time = datetime.datetime.fromtimestamp(modified_time)
        # Check if the file was modified in time period
        return (current_time - modified_time).days < max_file_age
    return False


# Compare two versions
def compare_versions(version1, version2):
    if version1 and version2:
        # Try to use semver.compare()
        try:
            return semver.compare(version1, version2)
        #TODO: also try semver.coerce
        # If semver.compare() fails, use string comparison
        except ValueError:
            return (version1 > version2) - (version1 < version2)
    # if any version is missing treat the case as version is not yet deployed
    return -2


# Find the deployed version of a component
def deployed_version(component):
    try:
        return deployed_versions[component]
    except Exception:
        return None



def process_file(file_path, post):
    # Get the date set in the file
    file_date = post.get("date")
    # Get the component set in the file
    component = post.get("build_artifact")[0].get("label")

    # Resolve the deployed version of the current artifact
    deployed_version_of_artifact = deployed_version(component)
    print(f"Deployed version of component {component} is {deployed_version_of_artifact}")
    # Compare the version in the changelog and the deployment
    # TODO find out how to determine the correct version for the zone branch from the list
    version_difference = compare_versions(post.get("version"), deployed_version_of_artifact)

    # If the changelog version is lower or equal to the deployed version and there was not a date previously
    if version_difference <= 0 and not file_date:
        print(f"Changelog version is older and there is no date")
        # Set the date property to the current date
        post["date"] = current_time
        # Save the file
        write_file(file_path, post)
    # If the changelog version is greater than the deployed version and there was a date before
    elif version_difference > 0 and file_date:
        print(f"Changelog version is newer and there is a prior date")
        # Remove the date
        post["date"] = None
        # Save the file
        write_file(file_path, post)


def write_file(file_path, post):
    if dry_run:
        print(f"Should have written file {file_path} with metadata:\n{post.metadata}")
    else:
        frontmatter.dump(post, file_path)


# Loop through the directory and its subdirectories
for root, dirs, files in os.walk(directory):
    # Loop through the files
    for file in files:
        # Get the full path of the file
        file_path = os.path.join(root, file)
        print(f"Checking file {file_path}")
        # Check if the file is a markdown file
        if should_open_file(file_path):
            # Parse the frontmatter of the file
            post = frontmatter.load(file_path)
            print(f"Opened file {file_path}")
            #Get version from changelog file
            file_version = post.get("version")
            # Check if the version is valid exists
            if file_version:
                print(f"Changelog file version is {file_version}")
                process_file(file_path, post)