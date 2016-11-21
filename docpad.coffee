redirects = require('./redirects')

docpadConfig = {
	watchOptions: preferredMethods: ['watchFile','watch']
	templateData: {
		site:
			title: 'Cumulocity'
		sections:  [
			{ title: 'Concepts Guide', folder: 'guides/concepts', slug: 'concepts-guide', icon: 'glyphicon-asterisk', description: 'The concept descriptions explain the architecture and technical concepts behind Cumulocity. They are intended for anyone technically interested in the machine-to-machine application platform, be it solution architects, system administrators or software developers.' },
			{ title: 'User\'s Guide', folder: 'guides/users-guide', slug: 'users-guide', icon : 'glyphicon-user', description: ''},
			{ title: 'Analytics User Guide', folder: 'guides/event-language' , slug: 'event-language', icon : 'glyphicon-book', description: 'TBD'},
			{ title: 'Device Guides', folder: 'guides/devices' , slug: 'device-guides', icon: 'glyphicon-phone', description: '' },
			{ title: 'REST Developer\'s Guide', folder: 'guides/rest', slug: 'rest-developer', icon: 'glyphicon-cog', description: '' },
			{ title: 'MQTT Developer\'s Guide', folder: 'guides/mqtt', slug: 'mqtt-developer', icon: 'glyphicon-cog', description: '' },
			{ title: 'Java Developer\'s Guide', folder: 'guides/java', slug: 'java-developer', icon: 'glyphicon-cog', description: '' },
			{ title: 'Web Developer\'s Guide', folder: 'guides/web', slug: 'web-developer', icon: 'glyphicon-cog', description: '' },
			{ title: 'C++ Developer\'s Guide', folder: 'guides/cpp', slug: 'cpp-developer', icon: 'glyphicon-cog', description: '' },
			{ title: 'Reference Guide', folder: 'guides/reference' , slug: 'reference-guide', icon : 'glyphicon-book', description: 'The reference guide contains the detailed technical specifications of the programming interfaces of Cumulocity as reference for software developers.'}
		]
  }
	plugins:
		redirector:
			redirects:
				redirects
		tableofcontents:
			requiredMetadata: true
			requiredMetadataField: 'toc'
			headerSelectors: 'h2,h3'
}

module.exports = docpadConfig;
