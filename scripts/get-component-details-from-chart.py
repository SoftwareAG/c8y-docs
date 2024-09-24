import json
from _datetime import datetime

components_to_update = []
# docs (c8y-docs repo) and pipeline (c8y-iot-build-pipeline repo) are directories created by daily-changelogs-dates-trigger-yml
buildartifact_path = "docs/data/buildartifact.json"
helmcharts_path = "pipeline/clusters/helm_charts_data.json"

with open(buildartifact_path) as json_file:
    artifact_options_list = json.load(json_file).get('options')
    artifact_list = [build_artifact['option'] for build_artifact in artifact_options_list]
with open(helmcharts_path) as json_file:
    components_list = list(json.load(json_file).values())

for component in components_list:
    if component.get('component_name') in artifact_list and component.get('zones').get('c8y-ops-zone-1').get(
            'updated_at') is not None:
        name = (component.get('component_name'))
        version = (component.get('zones').get('c8y-ops-zone-1').get('desired_version'))
        date = str(component.get('zones').get('c8y-ops-zone-1').get('updated_at'))
        date = datetime.strptime(date, '%Y-%m-%d %H:%M:%S.%f').strftime('%Y-%m-%d')
        component = {'component_name': name, 'component_version': version, 'component_update_date': date}
        if component not in components_to_update:
            components_to_update.append(component)

with open('components_to_update.json', 'w') as output_file:
    json.dump(components_to_update, output_file)
