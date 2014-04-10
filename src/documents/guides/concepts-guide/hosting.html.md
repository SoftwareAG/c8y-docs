# Overview

Cumulocity can host your own HTML5 and JavaScript web applications through your domain. These applications can be registered using the administration user interface. Switch to the administration user interface by clicking on the application switcher at the top left of the user interface and selecting "Administration". Then select "Own Applications" and click "Add new".

![List of own applications](/images/c8yimages/ownapplications.png)

There are two types of applications that can be configured:

-   Type "Hosted": The applications are served from a repository such as Bitbucket or Github to a user-defined path and are visible in the application switcher.
-   Type "External": The applications are completely external and are just shown in the application switcher.

Assume that you are developing a web application using Bitbucket as code repository. In this case, exposing the application through Cumulocity can be done as follows:

-   Enter the name of the application. This is shown in the application switcher at the top left of the screen.
-   Optionally, enter an application key. This is used to distinguish your application from other applications in case you want to publish your application to other companies.
-   Select "Hosted" as type.
-   Select the URL that is used to make your application available to users.
-   Enter the URL to your repository. In case of Bitbucket, the URL has the structure shown below.
-   If your repository is private, enter the username and password of a Bitbucket user that is permitted to access the repository. Currently, basic authentication is the only supported authentication method (i.e., straight Bitbucket username and password, not any of the OpenID providers).
-   Save the application.

<!-- -->

    https://bitbucket.org/<bitbucket user>/<bitbucket repository>/raw/<branch>/[path inside repository]

Now the application shows up in the application switcher. You can also click on the link in the list of own applications to verify if the configuration was successful.

![Configuring a new application](/images/c8yimages/mynewapp.png)

The above procedure helps you to publish your M2M application much faster to your end users. If you are satisfied with your application, publishing is just a matter of releasing your code in version control ??? deployment is handled automatically.

If you want to make your application available to other Cumulocity customers, please [contact us](mailto:support@cumulocity.com) for certification.
