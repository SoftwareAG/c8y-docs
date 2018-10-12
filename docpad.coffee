redirects = require('./redirects')
# DocPad Configuration File
# http://docpad.org/docs/config
# Define the DocPad Configuration
docpadConfig = {
	# ...
	templateData:

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://cumulocity.com"


			# The default title of our website
			title: "Cumulocity IoT Guides"

			# The website description (for SEO)
			description: "Concepts, user, and developer guides for the Cumulocity IoT platform"


			# The website keywords (for SEO) separated by commas§
			keywords: "Concepts, documentation, user guide, developer guide, Cumulocity IoT, IoT platform "

			# The website author's name
			author: "Cumulocity"

			# The website author's email
			email: "carlos.ceia@cumulocity.com"

      # Scripts
			scripts: [
				"/guides/scripts/bootstrap/dropdown.js",
				"/guides/scripts/bootstrap/transition.js",
				"/guides/scripts/bootstrap/scrollspy.js",
				"/guides/scripts/bootstrap/tooltip.js",
				"/guides/scripts/bootstrap/popover.js",
				"/guides/scripts/bootstrap/collapse.js",
				"/guides/scripts/bootstrap/transition.js",
				"/guides/scripts/clipboard.js",
				"/guides/scripts/zoom.min.js",
				"/guides/scripts/jquery-scrollto.js",
				"/guides/scripts/jquery.history.js",
				"/guides/scripts/ajaxify-html5.js",
				"/guides/scripts/docs-main.js"
			]



		# -----------------------------
		# Helper Functions
		getUrl: (document) ->
			return @site.url + (document.url or document.get?('url'))

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title

		# Get the prepared site/document description
		getPreparedDescription: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description or @site.description

		# Get the prepared site/document keywords
		getPreparedKeywords: ->
			# Merge the document keywords with the site keywords
			@site.keywords.concat(@document.keywords or []).join(', ')

		getAbsoluteUrl: (_, site) ->
			site = site || @site.url

			if (typeof _ == "string")
					if (_[0] == "/" && _[1] != "/")
							return site+_
					return _

			if (typeof _ == "object")
					if (_.url)
							return @getUrl(_.url,site)
					if (_.map)
							_getUrl = arguments.callee
							return _.map((d) ->
									return _getUrl(d,site)
							)

			return _

		sections: [
			{ title: 'Concepts guide', folder: 'guides/concepts', slug: 'concepts-guide', icon: 'c8y-icon c8y-icon-c8y-engine', description: 'The architecture and technical concepts behind Cumulocity. Intended for anyone technically interested in the machine-to-machine application platform.' },
			#{ title: 'konzepte', lang: 'de', folder: 'guides/konzepte', slug: 'konzepte', icon: 'c8y-icon c8y-icon-c8y-engine', description: 'The reference guide contains the detailed technical specifications of the programming interfaces of Cumulocity as reference for software developers.' },
			{ title: 'User guide', folder: 'guides/users-guide', slug: 'users-guide', icon : 'fa fa-user-circle-o', description: 'Core, in-depth explanation on using the Administration, Cockpit and Device Management applications and various optional Cumulocity services through the GUI.'},
			{ title: 'Handbuch', folder: 'guides/benutzerhandbuch', slug: 'benutzerhandbuch', icon : 'fa fa-user-circle-o', description: 'Detaillierte Beschreibung der Nutzung der Standardanwendungen Administration, Cockpit und Device Management sowie weiterer in Cumulocity verfügbarer Services über die Benutzeroberfläche.'},
			{ title: 'Cumulocity IoT Edge', folder: 'guides/edge', slug: 'cumulocity-edge', icon : 'fa fa-book', description: 'How to install, run and operate Cumulocity IoT Edge, the local version of Cumulocity IoT.'},
			{ title: 'CEL analytics guide', folder: 'guides/event-language' , slug: 'event-language', icon : 'c8y-icon c8y-icon-data-explorer', description: 'Introduces the Cumulocity Event Language (CEL) for real-time event processing, enabling you to add your own analytics or other business logic to your IoT solutions.'},
			{ title: 'Apama analytics guide', folder: 'guides/apama' , slug: 'apama', icon : 'c8y-icon c8y-icon-data-explorer', description: 'Basics for understanding how the Apama Event Processing Language (EPL) works and how to create your own analytics or other business logic in Cumulocity with Apama EPL.'},
			{ title: 'Device guides', folder: 'guides/devices' , slug: 'device-guides', icon: 'c8y-icon c8y-icon-device-management', description: 'Collection of a large amount of device types with guaranteed plug-and-play compatibility and full functional support in the Cumulocity IoT platform.' },
			{ title: 'Reference guide', folder: 'guides/reference' , slug: 'reference-guide', icon : 'fa fa-book', description: 'Detailed technical specifications of the programming interfaces of Cumulocity as a reference for software developers.'},
			{ title: 'Microservice SDK guide', folder: 'guides/microservice-sdk' , slug: 'microservice-sdk', icon : 'c8y-icon c8y-icon-tools', description: 'How to develop and deploy microservices on top of Cumulocity using the Microservice SDK.'},
			{ title: 'Device SDK guide', folder: 'guides/device-sdk' , slug: 'device-sdk', icon : 'c8y-icon c8y-icon-tools', description: 'How to integrate IoT data sources with the Cumulocity IoT platform.'},
			{ title: 'REST developer\'s guide', folder: 'guides/rest', slug: 'rest-developer', icon: 'c8y-icon c8y-icon-tools', description: 'How to use REST interfaces to integrate devices with Cumulocity and how to develop applications on top of Cumulocity.' },
			{ title: 'Java developer\'s guide', folder: 'guides/java', slug: 'java-developer', icon: 'c8y-icon c8y-icon-java', description: 'How to use Java to interface Cumulocity with open Java-enabled devices, closed devices or your enterprise IT systems.' },
			{ title: 'Web developer\'s guide', folder: 'guides/web', slug: 'web-developer', icon: 'c8y-icon c8y-icon-smart-rest', description: 'How to use the Web SDK to extend applications with your own plugins, add your own applications or implement further functionalities tailored to your use case.' }
					
			]
	

	# =================================
	# Environments
	environments:
		development:
			templateData:
				site:
					url: 'http://localhost:9778'

	watchOptions: preferredMethods: ['watchFile','watch']

	plugins:
		redirector:
			redirects:
				redirects
		less:
			referencesOthers: true
		sitemap:
      cachetime: 600000
      changefreq: 'weekly'
      priority: 0.5
      filePath: 'sitemap.xml'

	ignoreHiddenFiles: true

}

# Export the DocPad Configuration
module.exports = docpadConfig
