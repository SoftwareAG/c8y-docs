redirects = require('./redirects')

docpadConfig = {
	watchOptions: preferredMethods: ['watchFile','watch']
	templateData: {
		site:
			title: 'Cumulocity'
			
			# Scripts
			scripts: [
				"/guides/js/bootstrap/dropdown.js",
				"/guides/js/bootstrap/transition.js",
				"/guides/js/bootstrap/scrollspy.js",
				"/guides/js/bootstrap/collapse.js",
				"/guides/js/bootstrap/transition.js",
				"/guides/js/clipboard.js",
				"/guides/js/zoom.min.js",
				"/guides/js/jquery-scrollto.js",
				"/guides/js/jquery.history.js",
				"/guides/js/ajaxify-html5.js",
				"/guides/js/docs-main.js"
			]

		# -----------------------------
    # Helper Functions
		getUrl: (document) ->
			return @site.url + (document.url or document.get?('url'))

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
			
		sections:  [
			{ title: 'Concepts Guide', folder: 'guides/concepts', slug: 'concepts-guide', icon: 'c8y-icon c8y-icon-c8y-engine', description: 'The concept descriptions explain the architecture and technical concepts behind Cumulocity. They are intended for anyone technically interested in the machine-to-machine application platform, be it solution architects, system administrators or software developers.' },
			{ title: 'User\'s Guide', folder: 'guides/users-guide', slug: 'users-guide', icon : 'fa fa-user-circle-o', description: ''},
			{ title: 'Handbuch', folder: 'guides/benutzerhandbuch', slug: 'benutzerhandbuch', icon : 'fa fa-user-circle-o', description: ''},
			{ title: 'Analytics User Guide', folder: 'guides/event-language' , slug: 'event-language', icon : 'c8y-icon c8y-icon-data-explorer', description: 'TBD'},
			{ title: 'Device Guides', folder: 'guides/devices' , slug: 'device-guides', icon: 'c8y-icon c8y-icon-device-management', description: '' },
			{ title: 'REST Developer\'s Guide', folder: 'guides/rest', slug: 'rest-developer', icon: 'fa fa-cog', description: '' },
			{ title: 'MQTT Developer\'s Guide', folder: 'guides/mqtt', slug: 'mqtt-developer', icon: 'fa fa-cog', description: '' },
			{ title: 'Java Developer\'s Guide', folder: 'guides/java', slug: 'java-developer', icon: 'c8y-icon c8y-icon-java', description: '' },
			{ title: 'Web Developer\'s Guide', folder: 'guides/web', slug: 'web-developer', icon: 'c8y-icon c8y-icon-smart-rest', description: '' },
			{ title: 'C++ Developer\'s Guide', folder: 'guides/cpp', slug: 'cpp-developer', icon: 'fa fa-cog', description: '' },
			{ title: 'Reference Guide', folder: 'guides/reference' , slug: 'reference-guide', icon : 'fa fa-book', description: 'The reference guide contains the detailed technical specifications of the programming interfaces of Cumulocity as reference for software developers.'},
		]
		}
	plugins:
		redirector:
			redirects:
				redirects
	ignoreHiddenFiles: true
}

module.exports = docpadConfig;
